import Image from "next/image";
import selcom from "../images/selcom.svg";
import iconExclamationMark from "../images/exclamationMark.svg";
import iconMarkForEmail from "../images/markForEmail.svg";
import iconCube from "../images/cube.svg";
export default function Main() {
  return (
    <div className="bg-slate-100 h-[100vh]  ">
      <div className="flex justify-center items-center min-h-[100vh] font-practicain font-normal">
        <div className="bg-white w-[727px] h-[509px] rounded-2xl">
          <div className="flex justify-center ">
            <div className="bg-white w-[727px] h-[509px] rounded-2xl p-[27px]">
              <div className="bg-[#F1EFF4] h-[40px] flex justify-between items-center rounded-[7px] w-[674px] shadow-inner ">
                <a
                  href="#"
                  className="no-underline font-FbPractica w-[219px] ml-[3px] active:min-h-[34px] flex justify-center items-center   rounded-[5px]  hover:underline"
                >
                  תשתיות קוויות נטפרי
                </a>
                <a
                  href="#"
                  className="no-underline  w-[219px] active:h-[34px]  flex justify-center items-center  rounded-[5px]  hover:underline"
                >
                  סים וייז בלבד נטפרי
                </a>
                <a
                  href="#"
                  className=" no-underline  w-[219px] mr-[4px] h-[34px] shadow-mm flex justify-center items-center bg-white rounded-[5px] hover:underline hover:outline-none focus:border-sky-500 hover:ring-sky-500 hover:ring-2 text-base"
                >
                  סים סלולרי נטפרי
                </a>
              </div>
              <div className="flex justify-between items-center mt-9">
                <label className="block w-[332px]">
                  <div className="flex justify-between items-center">
                    <Image
                      className="w-[11px] h-[13px]"
                      src={iconExclamationMark}
                      alt="My img"
                      width={100}
                      height={100}
                    />
                    <span className="text-base mr-1">חבילת גלישה חודשית</span>
                  </div>
                  <input
                    type="number"
                    className="mt-1 px-3 rtl  py-2 bg-white border  border-slate-300 type:bg-white  placeholder:rtl placeholder-slate-400 hover:outline-none hover:border-sky-500 hover:ring-sky-500 block w-full rounded-md sm:text-sm hover:ring-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-right placeholder-right shadow-inputShadow"
                    placeholder=" גיגה לחודש - 35₪"
                  ></input>
                </label>

                <label className=" block  w-[332px] ml-[5px]">
                  <div className="flex justify-end ">
                    <span className="text-base mr-1 font-FbPractica">
                      מספר סים
                    </span>
                  </div>
                  <div className="relative w-full">
                    <span className="absolute inset-y-2 right-1 flex items-center pl-2 z-10 w-[42px] h-[20px] text-right rtl">
                      <Image
                        src={selcom}
                        alt="My img"
                        width={100}
                        height={100}
                      />
                    </span>
                    <input
                      className="placeholder:italic placeholder:rtl mt-1 shadow-inputShadow  placeholder:text-slate-400 ring-1 ring-[#F9B530]  block  w-full  border-slate-300 rounded-md py-2 pl-9 pr-12  hover:outline-none hover:border-sky-500 hover:ring-sky-500 hover:ring-2 sm:text-sm text-right placeholder-right focus:outline-none focus:border-sky-500 focus:ring-sky-500  focus:ring-2"
                      type="text"
                      name="search"
                    />
                  </div>
                </label>
              </div>
              <span className="text-base flex justify-end mt-5 mr-1">
                פרטי לקוח
              </span>
              <div className="grid grid-rows-2 gap-4 font-normal">
                <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  className="mt-1 px-3 rtl h-[34px]  py-2 bg-white border shadow-inputShadow border-slate-300 type:bg-white  placeholder:rtl placeholder-slate-400 hover:outline-none hover:border-sky-500 focus:hover-sky-500 block w-full rounded-md sm:text-sm hover:ring2 text-right placeholder-right focus:outline-none focus:border-sky-500 hover:ring-sky-500  hover:ring-2"
                  placeholder="שם לחשבונית (אם שונה משם הלקוח)"
                ></input>

                <input
                  type="text"
                  className="mt-1 px-3 rtl h-[34px] py-2 bg-white border shadow-inputShadow border-slate-300 type:bg-white  placeholder:rtl placeholder-slate-400 hover:outline-none focus:border-sky-500 hover:ring-sky-500 block w-full rounded-md sm:text-sm  text-right placeholder-right focus:outline-none focus:ring-sky-500  hover:ring-2"
                  placeholder="שם משפחה"
                ></input>
                <input
                  type="text"
                  className="mt-1 px-3 rtl h-[34px]  py-2 bg-white border shadow-inputShadow border-slate-300 type:bg-white  placeholder:rtl placeholder-slate-400 hover:outline-none focus:border-sky-500 hover:ring-sky-500 block w-full rounded-md sm:text-sm  text-right placeholder-right focus:outline-none  focus:ring-sky-500  hover:ring-2"
                  placeholder="שם פרטי"
                ></input>
                </div>
                <div className="grid grid-cols-3 gap-2">
                <div className="relative w-full">
                <span className="absolute inset-y-2 top-2.5 left-0 flex items-center pl-2 z-10 w-[19px] h-[22px] ">
                      <Image
                        src={iconMarkForEmail}
                        alt="My img"
                        width={100}
                        height={100}
                      />
                    </span>
                <input
                  type="text"
                  className="mt-1 px-3 rtl h-[34px]  py-2 bg-white border shadow-inputShadow border-slate-300 type:bg-white  placeholder:rtl placeholder-slate-400 hover:outline-none hover:border-sky-500 hover:ring-sky-500 block w-full rounded-md sm:text-sm  text-right placeholder-right focus:outline-none focus:border-sky-500 hover:ring-2"
                  placeholder="אימייל"
                ></input>
               
                </div>

                <input
                  type="text"
                  className="mt-1 px-3 rtl h-[34px] py-2 bg-white border shadow-inputShadow border-slate-300 type:bg-white  placeholder:rtl placeholder-slate-400 hover:outline-none hover:border-sky-500 hover:ring-sky-500 text-right placeholder-right focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm hover:ring-2"
                  placeholder="טלפון"
                ></input>
                
                <input
                  type="text"
                  className="mt-1 px-3 rtl h-[34px] py-2 bg-white border shadow-inputShadow border-slate-300 type:bg-white  placeholder:rtl placeholder-slate-400 hover:outline-none hover:border-sky-500 hover:ring-sky-500 text-right placeholder-right focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm hover:ring-2"
                  placeholder="ת.ז./ח.פ/דרכון"
                ></input>
                 </div>
              </div>
              <div className="w-[673px] h-[77px] border font-notosans   shadow-ss block mt-9 p-2 text-right overflow-hidden rounded-md " style={{color:'#746E8C'}}>
                <p className="text-right text-s text-[#746E8C]" >
                  ציינתי בפני הלקוח שנטפרי גובה תשלום של בין 4 ש"ח ל-15 ש"ח על
                  הסינון (פירוט על המסלולים השונים כאן). בנוסף, לאחר 24 חודש,
                  יתווסף תשלום 5₪ לעלות החודשית. אני מאשר שמסרתי ללקוח את כל
                  הפרטים והתנאים המופיעים באתר ובהתאם לחוזה ההתקשרות. הבהרתי
                  ללקוח שבכל ניתוק של שירות, יש להודיע ליוסי תקשורת בטלפון,
                  במייל או באתר, אחרת החיוב ימשיך עד בקשת הניתוק גם אם לא בוצע
                  שימוש בקו.
                </p>
                <div className="flex justify-end items-center text-s" >
                  <span className="font-bold mr-1">אני מאשר</span>
                  <Image
                
                      src={iconCube}
                      alt="My svg"
                      // width={100}
                      // height={100}
                    />
                </div>
              </div>
              <button className="w-full rounded-md bg-[#F9B530] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm mt-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                המשך לעדכון פרטי תשלום
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
