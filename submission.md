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
code ด้านบน เป็นโค้ดในส่วนของ **App.js** โดยในส่วนของ App.js เป็นการแสดงหน้า HTML ซึ่งจะแสดง ข้อความและรูปแบบต่างๆของ App
โดยประกอบไปด้วย ส่วนของ 

* **import** โดยในส่วนนี้จะเป็นการนำเข้า ไฟล์ต่างๆ โดยมีการ import
```
import React from 'react'; /* import react เป็นการ import Library ของ JavaScript */
import logo from './logo.svg'; /* import logo ของ yarn*/
import './App.css';/* import css ของ App */
import CharacterCard from './CharacterCard';/* import ไฟล์ CharacterCard */
import WordCard from './WordCard';/* import ไฟล์ WordCard */
```
* **const word** เป็นตัวแปร และยังเป็นการ raender ตัว wordCard ในส่วนของ code ```<WordCard value={word}/>``` 

* **export default App**  คือการ export ตัว Component App เพื่อเอาไปใช้ที่ไฟล์อื่นๆ

## App.css

```
.card {
  display: inline-block;
  text-align: center;
  width: 3em;
  height: 1.5em;
  font-size: 0.80em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: rgb(255, 255, 255);
  margin: 0.5em;
  user-select: none;
 }
 
 .activeCard {
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
 }
 body{ 
  background-color: seashell;
  font-size: 40px;
  font-family: 'Chonburi';
 }

 h1{
   font-size: 60px;
   text-align: center;
   margin-bottom: 10px;
   font-family: 'Chonburi';
 }

 h2{
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
}

 p1{

  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Chonburi';
}
p2{

  font-size: 40px;
  text-align: center;
  font-family: 'Chonburi';
}
```
code ด้านบน เป็นโค้ดในส่วนของ **App.css**  ซึ่งในส่วนของหน้านี้เป็นส่วนของการปรับแต่งหน้า HTML ทั้ง สี ตัวอักษร และอื่นๆ

* **display: inline-block;** ทำให้ตัวอักษรเรียงใน line เดียวกัน 
* **text-align: center;** ทำให้ตัวอักษรอยู่ตรงกลางของ block
* **width: 3em;**  กำหนกความกว้างของ Block
* **height: 1.5em;** กำหนดความสูงของ Block
* **font-size: 0.80em;** กำหนดขนาดของตัวอีกษร
* **box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);** ทำให้ Block มีเงา
* **background-color: rgb(255, 255, 255);** กำหนดพื้นหลังของ Block
* **margin: 0.5em;** กำหนดความกว้างระหว่าง Block
* **font-family: 'Chonburi';** เลือกรูปแบบของตัวอักษร

## CharecterCard.js

```
import React, { useState, useEffect, useRef } from 'react';

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attemptRef = useRef(props.attempt);

    const activate = () => {
        if(!active){
            setActive(true)
            props.activationHandler(props.value)
        }
    }
    useEffect(()=> {
        if(attemptRef.current != props.attempt){
            setActive(false);
            attemptRef.current = props.attempt
        }
    })

    const className = `card ${active ? 'activeCard': ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )

}
```
code ด้านบน เป็นโค้ดในส่วนของ **CharecterCard.js**  
```
const activate = () => {
        if(!active){
            setActive(true)
            props.activationHandler(props.value)
        }
    }
```
* code ส่วนนี้เป็นส่วนในการเรียกใช้ activationHander


```
    useEffect(()=> {
        if(attemptRef.current != props.attempt){
            setActive(false);
            attemptRef.current = props.attempt
        }
    })
```
* จากโค้ดบางส่วนข้างบนนั้นจะเป็นส่วนของการกำหนด หากเมื่อ user กดเพื่อสะกดตัวอักษรเพื่อเรียงเป็นคำแต่เรียงผิด  ข้อความจะทำการรีเฟรชคำใหม่

```
 const className = `card ${active ? 'activeCard': ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
```
* จากโค้ดดังกล่าวเป็นการรองรับการถูกคลิก โดยจะเปลี่ยนรูปแบบการแสดงผลผ่านการกำหนด className เมื่อถูกคลิก
ทั้งนี้จะตอบสนองต่อการคลิกเพียงครั้งเดียวเท่านั้น

## WordCard.js

```
import React, { useState } from 'react';
import * as _ from 'lodash';
import CharacterCard from './CharacterCard';
import { attempt } from 'lodash';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

        const [state, setState] = useState(prepareStateFromWord(props.value))
        const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset, next attemp')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }

    return (
        <div>
            { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
            }
        </div>
    );
}
```

code ด้านบน เป็นโค้ดในส่วนของ **WordCard.js** 


```const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return{
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
```

* code ในส่วนนี้จะเป็นส่วนในการสุ่มตัวอักษรโดยหาก user เรียงคำผิด จะมีการสุ่มค่าใหม่แบบไม่เรียงคำ

```
let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset, next attemp')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
    }
```
* จากโค้ดข้างบนจะเป็นโค้ดในส่วนของการกำหนด โดยหาก user กดเรียงคำถูก จะขึ้นคำว่า yeah แต่หากเรียงคำผิดจะทำการ reset attemp

## Name-ID
ชื่อ นางสาวสะอาดะห์ ดายันตา 

รหัสนักศึกษา 6210110362

section 01 
