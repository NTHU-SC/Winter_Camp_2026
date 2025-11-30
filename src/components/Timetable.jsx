import { motion } from "framer-motion";
import React, { useState } from "react";

import { InvitationModal } from "./InvitationModal";
// import featuresdiagonal from "../assets/images/featuresdiagonal.jpg";
import "../styles/Table.css";

export const Timetable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1"
      id="course">

      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <div className="w-full max-w-[1150px] flex justify-center bg-customDarkBg1 pt-12 lg:pt-12 pb-4 lg:pb-10 mx-auto flex-col">
          <div className="w-full flex flex-col items-center">
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              專業知識密集課程
            </h2>
          </div>
          <div className="w-full overflow-x-auto"> {/* 添加 overflow-x-auto */}
            <MyTable />
          </div>
        </div>
      </motion.div>
      <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};


const MyTable = () => {
  return (
    <table className="GeneratedTable" border="1" style={{borderCollapse: 'collapse', textAlign: 'center'}}>
      <thead>
        <tr>
          <th></th>
          <th>Day1 1/29 (四)</th>
          <th>Day2 1/30 (五)</th>
          <th colSpan="2">Day3 1/31 (六)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>活動地點</td>
          <td>綜四224</td>
          <td>綜四224</td>
          <td>綜四224</td>
          <td>綜四223</td>
        </tr>
        <tr>
          <td>9:00~9:30</td>
          <td>報到</td>
          <td rowSpan="3">MPI教學</td>
          <td rowSpan="3" colSpan="2">AI簡介與實操</td>
        </tr>
        <tr>
          <td>9:30~10:30</td>
          <td>開幕、活動說明</td>
        </tr>
        <tr>
          <td>10:30~12:00</td>
          <td>基礎平行計算簡介</td>
        </tr>
        <tr>
          <td>12:00~13:30</td>
          <td>午餐（自理）、校園巡禮</td>
          <td>午餐（餐盒）</td>
          <td colSpan="2">
            午餐（自理）、成功湖合照<br/>
            學生叢集競賽座談會
          </td>
        </tr>
        <tr>
          <td>13:30~14:30</td>
          <td>超級電腦簡介與實操</td>
          <td rowSpan="4">
            國網中心參訪<br/>
          </td>
          <td colSpan="2">學生叢集競賽座談會</td>
        </tr>
        <tr>
          <td>14:30~15:00</td>
          <td rowSpan="2">Pthread、OpenMP教學</td>
          <td>
            作業檢討<br/>
          </td>
          <td rowSpan="2">
            應用程式安裝<br/>
          </td>
        </tr>
        <tr>
          <td>15:00~16:30</td>
          <td>
            頒發證書<br/>
          </td>
        </tr>
        <tr>
          <td>16:30~17:30</td>
          <td>圖書館參訪（自由參加）</td>
          <td colSpan="2" rowSpan="4">賦歸</td>
        </tr>
        <tr>
          <td>17:30~19:00</td>
          <td>晚餐（Pizza 相見歡）</td>
          <td>
            晚餐（系所介紹 限高中生）<br/>
          </td>
        </tr>
        <tr>
          <td>19:00~20:00</td>
          <td>效能分析量測</td>
          <td rowSpan="2">
            上機作業：MPI<br/>
            機房參訪
          </td>
        </tr>
        <tr>
          <td>20:00~21:30</td>
          <td>
            上機作業：HPL/VTune<br/>
            OpenMP上機練習<br/>
            機房參訪
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MyTable;
