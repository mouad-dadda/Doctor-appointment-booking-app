import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { Footer, Header } from "../Components";
import { useTranslation } from "react-i18next";

const DoctorPage = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/doctor_view/${id}`);
        setDoctor(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctorProfile();
  }, [id]);

  return (
    <>
      <Header />
      <div className="container my-10 mx-auto md:px-6">
       
          <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[300px]"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap justify-center text-center lg:text-left">
                <div className="w-full shrink-0 grow-0 basis-auto md:px-6 xl:w-10/12">
                  <div className="grid items-center gap-x-6 lg:grid-cols-2 ">
                    <div className=" flex border-r-4 ">
                      <img src="/img/Rectangle 3.png" alt="" className=' w-[250px] h-[250px] rounded-full ' />
                      {doctor && <span className='mt-[100px] mx-5'>{doctor.firstname} {doctor.lastname}</span>}
                    </div>
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="inline-block rounded-md bg-primary-100 p-4">
                            <i class="fa-regular fa-user-doctor"></i>
                          </div>
                          <div className="ml-6 grow">
                            {doctor &&
                              <p className="text-neutral-500 dark:text-neutral-200 align-middle inline-block">
                                {doctor.specialite}
                              </p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="flex items-start">
                          <div className="inline-block rounded-md bg-primary-100 p-4">
                            <i className="fa-solid fa-phone-office"></i>
                          </div>
                          <div className="ml-6 grow">
                            {doctor &&
                              <p className="text-neutral-500 dark:text-neutral-200">
                                {doctor.address_cabinet}
                              </p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="align-start flex">
                          <div className="inline-block rounded-md bg-primary-100 p-4">
                            <i class="fa-solid fa-hospital"></i>
                          </div>
                          <div className="ml-6 grow">
                            {doctor &&
                              <p className="text-neutral-500 dark:text-neutral-200">
                                {doctor.nom_cabinet}
                              </p>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6">
                        <div className="align-start flex">
                          <div className="inline-block rounded-md bg-primary-100 p-4">
                            <i class="fa-solid fa-phone"></i>
                          </div>
                          <div className="ml-6 grow">
                            {doctor &&
                              <p className="text-neutral-500 dark:text-neutral-200">
                                {doctor.phoneNumber}
                              </p>
                            }
                          </div>
                        </div>
                      </div>

                    </div>                
                      </div>

                </div>
              </div>
            </div>
          </div>
        
  <div class="container my-24 mx-auto md:px-6">
   
    <section class="mb-32">
   
      <h2 class="mb-12 text-center text-3xl font-bold">{t("view.Title")}</h2>

      <div class="grid gap-6 lg:grid-cols-3">
        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/051.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
              <div class="flex h-full items-end justify-start">
                <div class="m-6 text-white">
                  <h5 class="mb-3 text-lg font-bold">I miss the sun</h5>
                  <p>
                    <small
                      >Published <u>13.01.2022</u></small
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/044.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
              <div class="flex h-full items-end justify-start">
                <div class="m-6 text-white">
                  <h5 class="mb-3 text-lg font-bold">
                    Adventure in the desert
                  </h5>
                  <p>
                    <small>Published <u>12.01.2022</u> </small>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/045.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
              <div class="flex h-full items-end justify-start">
                <div class="m-6 text-white">
                  <h5 class="mb-3 text-lg font-bold">Lonely mountain</h5>
                  <p>
                    <small
                      >Published <u>10.01.2022</u> </small
                    >
                  </p>
                </div>
              </div>
            </div>
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/047.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
              <div class="flex h-full items-end justify-start">
                <div class="m-6 text-white">
                  <h5 class="mb-3 text-lg font-bold">Let's go!</h5>
                  <p>
                    <small>Published <u>09.01.2022</u> </small>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/028.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
              <div class="flex h-full items-end justify-start">
                <div class="m-6 text-white">
                  <h5 class="mb-3 text-lg font-bold">
                    A hut in the mountains
                  </h5>
                  <p>
                    <small>Published <u>07.01.2022</u>k</small>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
          </a>
        </div>

        <div
          class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/049.jpg"
            class="w-full align-middle transition duration-300 ease-linear" />
          <a href="#!">
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
              <div class="flex h-full items-end justify-start">
                <div class="m-6 text-white">
                  <h5 class="mb-3 text-lg font-bold">Beautiful waterfall</h5>
                  <p>
                    <small>Published <u>04.01.2022</u> </small>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
          </a>
        </div>
      </div>
    </section>
   
  </div>
 
       
      </div>

      <Footer />
    </>
  );
};

export default DoctorPage;
