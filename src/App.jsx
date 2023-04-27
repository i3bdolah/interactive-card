import CardBack from './assets/bg-card-back.png'
import CardFront from './assets/bg-card-front.png'
import BgDesktop from './assets/bg-main-desktop.png'
import BgMobile from './assets/bg-main-mobile.png'
import CardLogo from './assets/card-logo.svg'
import './App.css'
import { useState, useRef } from 'react'

function App() {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: 'Abdullah Bander',
    card_num: '00000000000000',
    exp_month: '09',
    exp_year: '22',
    cvc: '000',
  })

  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    setIsValid(true)
  }

  return (
    <>
      <div className="flex flex-row">
        {/* First Div  */}
        <div className="w-[60rem] h-[100vh]">
          <img className="h-full w-full" src={BgDesktop} />

          <img
            className="text-white text-[28px] absolute bottom-[620px] left-[340px] z-10"
            src={CardLogo}
          />
          <h1 className=" text-white text-[28px] absolute bottom-[525px] left-[340px] z-10 tracking-[5px]">
            {/* 0000&nbsp;&nbsp;0000&nbsp;&nbsp;0000&nbsp;&nbsp;0000 */}
            {form.card_num.padEnd(16, 0)}
          </h1>
          <h1 className=" text-white text-[18px] absolute bottom-[470px] left-[340px] z-10 tracking-wider">
            {/* ABDULLAH BANDER */}
            {form.name.toUpperCase()}
          </h1>
          <h1 className=" text-white text-[16px] absolute bottom-[470px] left-[660px] z-10 tracking-widest">
            {form.exp_month}/{form.exp_year}
          </h1>

          <img
            className="relative bottom-[410px] left-[390px] z--10 shadow-2xl rounded-lg"
            src={CardBack}
          />
          <h1 className=" text-white text-[18px] absolute bottom-[277px] left-[745px] z-10 tracking-wide">
            {form.cvc}
          </h1>
          <img
            className=" relative bottom-[940px] left-[300px] z--10 shadow-2xl rounded-lg"
            src={CardFront}
          />
        </div>

        {/* /////////////////////////////////////////////////////////// */}

        {/* Second Div  */}
        <div className="w-full flex flex-col justify-center items-center">
          <form ref={formRef}>
            <div className="flex flex-col m-4 mt-8 gap-3">
              <label className="tracking-widest text-[14px]">
                CARDHOLDER NAME
              </label>
              <input
                className="p-2  w-[450px] text-xl h-[45px] rounded-lg   focus:border-darkGrayish border-2"
                type="text"
                placeholder="Abdullah Al-Shehri"
                onChange={handleChange}
                name="name"
                // value={form.name}
                // required
                // maxLength={25}
              />
            </div>
            <div className="flex flex-col m-4 mt-8 gap-3">
              <label className="tracking-widest text-[14px]">CARD NUMBER</label>
              <input
                className="p-2  w-[450px] text-xl h-[45px] rounded-lg  focus:border-darkGrayish border-2 "
                type="text"
                // maxLength={16}
                // minLength={16}
                placeholder="0000 0000 0000 0000"
                onChange={handleChange}
                name="card_num"
                // value={form.card_num}
                // required
              />
            </div>
            <div className="flex flex-row m-4 mt-8 justify-between">
              <div className="flex gap-2 flex-col justify-between">
                <label className="tracking-widest text-[14px]">
                  EXP DATE (MM / YY)
                </label>
                <div className="flex gap-3">
                  <input
                    className="p-2  w-[70px] h-[45px] rounded-lg   focus:border-darkGrayish border-2 text-xl"
                    type="text"
                    placeholder="MM"
                    onChange={handleChange}
                    name="exp_month"
                    // value={form.exp_month}
                    // required
                    // maxLength={2}
                    // mi={23}
                  />
                  <input
                    className="p-2  w-[70px] h-[45px] rounded-lg   focus:border-darkGrayish border-2 text-xl"
                    type="text"
                    placeholder="YY"
                    onChange={handleChange}
                    name="exp_year"
                    // value={form.exp_year}
                    // required
                    // maxLength={2}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="tracking-widest text-[14px]">CVC</label>
                <input
                  className="p-2  w-[150] h-[45px] rounded-lg   focus:border-darkGrayish border-2  text-xl"
                  type="text"
                  placeholder="e.g. 123"
                  onChange={handleChange}
                  name="cvc"
                  // value={form.cvc}
                  // required
                  // maxLength={3}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="w-[450px] h-[60px] bg-veryDark text-white mt-8 rounded-lg text-xl">
                Confrim
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
