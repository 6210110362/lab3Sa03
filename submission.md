# Lab 3SA03 - สุภาษิต สอนท่าน
## App.js


``` 
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
const word5 = "ได้แว่น";
const word6 = "เข้าคลอง";
const word7 = "ตอผุด";
const word8 = "ร่างแห";
const word9 = "หลังพระ";
const word10 = "ปากถือศีล";



function App() {
  return (
    <div>
      
      <h1>สุภาษิต สอนท่าน</h1>
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

      <br></br><br></br>
      <p2>ตาบอด _ _ _ _ _</p2>
      <WordCard value={word5}/>
      <p1>ความหมาย คนที่มีสิ่งที่ตัวเองใช้ประโยชน์ไม่ได้ มักใช้คู่กับ หัวล้านได้หวี</p1>

      <br></br><br></br>
      <p2>ถอยหลัง _ _ _ _ _ _ _</p2>
      <WordCard value={word6}/>
      <p1>ความหมาย หวนกลับไปหาแบบเดิม ๆ ล้าสมัย</p1>

       <br></br><br></br>    
      <p2>น้ำลด _ _ _ _ </p2>
      <WordCard value={word7}/>
      <p1>ความหมาย เมื่อหมดอำนาจ ความชั่วที่ทำไว้ก็ปรากฎ</p1>
      
      <br></br><br></br>  
      <p2>ปลาติด _ _ _ _ _</p2>
      <WordCard value={word8}/>
      <p1>ความหมาย คนที่พลอยรับเคราะห์กรรมกับคนอื่น ทั้ง ๆ ที่ไม่ได้มีส่วนพัวพัน</p1>

      <br></br><br></br>    
      <p2>ปิดทอง _ _ _ _ _ _</p2>
      <WordCard value={word9}/>
      <p1>ความหมาย ทำดีแต่ไม่มีใครยกย่อง เพราะมองไม่เห็นคุณค่า</p1>

      <br></br><br></br>    
      <p2>มือถือสาก _ _ _ _ _ _ _</p2>
      <WordCard value={word10}/>
      <p1>ความหมาย ชอบแสดงตัวตนว่าเป็นคนมีศีล มีธรรม แต่ทำความเลวเป็นนิจ</p1>

      <h2>
        <br></br><br></br>
        Creat by 
        <br></br>
        Saadah Dayanta 6210110362 sec01
        <br></br>
          Lab3SA03 
        <br></br><br></br>
      </h2>
      
      </center>
    </div>
  );

}

export default App;
```
code ด้านบน เป็นโค้ดในส่วนของ App.js โดยในส่วนของ App.js เป็นการแสดงหน้า HTML ซึ่งจะแสดง ข้อความและรูปแบบต่างๆของ App
โดยประกอบไปด้วย ส่วนของ 

* **import** โดยในส่วนนี้จะเป็นการนำเข้าส่วนต่างๆ โดยมีการ import
```
import React from 'react'; /* import react เป็นการ import Library ของ JavaScript */
import logo from './logo.svg'; /* import logo ของ yarn*/
import './App.css';/* import css ของ App */
import CharacterCard from './CharacterCard';/* import ไฟล์ CharacterCard */
import WordCard from './WordCard';/* import ไฟล์ WordCard */
```

