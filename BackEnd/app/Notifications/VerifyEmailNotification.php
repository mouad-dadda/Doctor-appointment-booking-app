<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\URL;

class VerifyEmailNotification extends Notification
{


  /**
   * The callback that should be used to create the verify email URL.
   *
   * @var \Closure|null
   */
  public static $createUrlCallback;

  /**
   * The callback that should be used to build the mail message.
   *
   * @var \Closure|null
   */
  public static $toMailCallback;

  /**
   * Get the notification's delivery channels.
   *
   * @return array<int, string>
   */
  public function via(object $notifiable): array
  {
    return ['mail'];
  }

  /**
   * Get the mail representation of the notification.
   */
  public function toMail(object $notifiable): MailMessage
  {
    $verificationUrl = $this->verificationUrl($notifiable);

    if (static::$toMailCallback) {
      return call_user_func(static::$toMailCallback, $notifiable, $verificationUrl);
    }

    return $this->buildMailMessage($verificationUrl);
  }

  protected function buildMailMessage($url)
  {
    return (new MailMessage)
      ->subject(Lang::get('Verify Email Address'))
      ->line(Lang::get('Please click the button below to verify your email address.'))
      ->action(Lang::get('Verify Email Address'), $url)
      ->line(Lang::get('If you did not create an account, no further action is required.'));
  }

  protected function verificationUrl($notifiable)
  {
    if (static::$createUrlCallback) {
      return call_user_func(static::$createUrlCallback, $notifiable);
    }

    return URL::temporarySignedRoute(
      'doctor.verification.verify',
      Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
      [
        'id' => $notifiable->getKey(),
        'hash' => sha1($notifiable->getEmailForVerification()),
      ]
    );
  }


  /**
   * Set a callback that should be used when creating the email verification URL.
   *
   * @param  \Closure  $callback
   * @return void
   */
  public static function createUrlUsing($callback)
  {
    static::$createUrlCallback = $callback;
  }

  /**
   * Set a callback that should be used when building the notification mail message.
   *
   * @param  \Closure  $callback
   * @return void
   */
  public static function toMailUsing($callback)
  {
    static::$toMailCallback = $callback;
  }

  /**
   * Get the array representation of the notification.
   *
   * @return array<string, mixed>
   */
  public function toArray(object $notifiable): array
  {
    return [
      //
    ];
  }
}
