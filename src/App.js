import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "ข่มท่าน";
const word1 = "ปะจมูก";
const word2 = "ตั๊กแตน";
const word3 = "ขาเดียว";
const word4 = "ถึงหลัง";



function App() {
  return (
    <div>
      
      <h1>สุภาาษิต สอนท่าน</h1>
      <center>

      <p2>ยกตน _ _ _ _ _ </p2>
      <WordCard value={word}/>
      <p1>ความหมาย พูดทับถมผู้อื่นแสดงให้เห็นว่าตัวเหนือกว่า</p1>

      <br></br><br></br>
      <p2>ลูบหน้า _ _ _ _ _</p2>
      <WordCard value={word1}/>
      <p1>ความหมาย จะทำอะไรเด็ดขาดจริงจังลงไปไม่ได้ เพราะเกรงจะไปกระทบพวกพ้องตัวเอง</p1>   

      <br></br><br></br>
      <p2>ขี่ช้างจับ _ _ _ _ _</p2>
      <WordCard value={word2}/>
      <p1>ความหมาย ลงทุนมาก แต่กลับได้ผลนิดหน่อย</p1>

      <br></br><br></br>
      <p2>กระต่าย _ _ _ _ _ _</p2>
      <WordCard value={word3}/>
      <p1>ความหมาย ยืนกรานไม่ยอมรับผิด ฉันไม่ได้ทำ ฉันเปล่านะ</p1>

      <br></br><br></br>
      <p2>ชักหน้าไม่ _ _ _ _ _ </p2>
      <WordCard value={word4}/>
      <p1>ความหมาย มีรายได้ไม่พอกับรายจ่าย</p1>




      
      </center>
    </div>
  );

}

export default App;
