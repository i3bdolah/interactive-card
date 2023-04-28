import CardBack from './assets/bg-card-back.png'
import CardFront from './assets/bg-card-front.png'
import BgDesktop from './assets/bg-main-desktop.png'
import BgMobile from './assets/bg-main-mobile.png'
import CardLogo from './assets/card-logo.svg'
import iconComplete from './assets/icon-complete.svg'
import './App.css'

import { useState } from 'react'

const ValidMsg = ({ msg }) => {
  return <p className={`ml-1 text-red-500 text-xs over relative`}>{msg}</p>
}

const App = () => {
  const [form, setForm] = useState({
    name: '',
    card_num: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
  })

  const [input, setInput] = useState({
    name: true,
    card_num: true,
    exp_month: true,
    exp_year: true,
    cvc: true,
  })

  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Name
    if (form.name.trim().length === 0) {
      return setInput({ ...input, name: false })
    }

    // Card Number
    if (form.card_num.trim().length === 0 || isNaN(+form.card_num)) {
      return setInput({ ...input, card_num: false })
    }

    // Expire M
    if (
      form.exp_month.trim().length !== 2 ||
      isNaN(+form.exp_month) ||
      form.exp_month.trim() > 12
    ) {
      return setInput({ ...input, exp_month: false })
    }

    // Expire Y
    if (form.exp_year.trim().length !== 2 || isNaN(+form.exp_year)) {
      return setInput({ ...input, exp_year: false })
    }
    // CVC
    if (form.cvc.trim().length !== 3 || isNaN(+form.cvc)) {
      return setInput({ ...input, cvc: false })
    }
    setIsValid(!isValid)
  }

  return (
    <>
      <div className="flex flex-row">
        {/* First Div  */}
        <div className="w-[60rem] h-[100vh]">
          <img className="h-full w-full" src={BgDesktop} />
          <div className="">
            <div id="1">
              <img
                className="text-white text-[28px] absolute bottom-[620px] left-[340px] z-10"
                src={CardLogo}
              />
              <h1 className=" text-white text-[28px] absolute bottom-[525px] left-[340px] z-10 tracking-[5px]">
                {form.card_num.padEnd(16, 0)}
              </h1>
              <div>
                <h1 className=" text-white text-[18px] absolute bottom-[470px] left-[340px] z-10 tracking-wider">
                  {form.name.length > 0
                    ? form.name.toUpperCase()
                    : 'JANE APPLESEED'}
                </h1>
                <h1 className=" text-white text-[16px] absolute bottom-[470px] left-[660px] z-10 tracking-widest">
                  {form.exp_month.padEnd(2, '0')}/{form.exp_year.padEnd(2, '0')}
                </h1>
              </div>
            </div>
          </div>
          <img
            className="relative bottom-[410px] left-[390px] z--10 shadow-2xl rounded-lg"
            src={CardBack}
          />
          <h1 className=" text-white text-[18px] absolute bottom-[277px] left-[745px] z-10 tracking-wide">
            {form.cvc.padEnd(3, '0')}
          </h1>
          <img
            className="relative bottom-[940px] left-[300px] z--10 shadow-2xl rounded-lg"
            src={CardFront}
          />
        </div>

        {/* /////////////////////////////////////////////////////////// */}

        {/* Second Div  */}
        {isValid ? (
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3 justify-center items-center">
              <img src={iconComplete} className="w-[80px]" />
              <h1 className="text-veryDark tracking-widest text-[26px] mt-3 font-bold">
                THANK YOU!
              </h1>
              <h1 className="text-darkGrayish tracking-wider">
                We've added your card details
              </h1>
            </div>
            <button
              onClick={() => {
                setForm({
                  name: '',
                  card_num: '',
                  exp_month: '',
                  exp_year: '',
                  cvc: '',
                })
                setIsValid(!isValid)
              }}
              className="w-[450px] h-[60px] bg-veryDark text-white mt-8 rounded-lg"
            >
              Confrim
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col m-4 mt-8 gap-3">
                <label className="tracking-widest text-[14px]">
                  CARDHOLDER NAME
                </label>
                <input
                  className={`p-2  w-[450px] text-xl h-[45px] rounded-lg    border-[2px] focus:outline-purple-900 ${
                    input.name ? '' : 'border-red-500'
                  }`}
                  type="text"
                  placeholder="e.g. Jane Appleseed"
                  onChange={handleChange}
                  name="name"
                  onFocus={() => setInput({ ...input, name: true })}
                  // value={form.name}
                  // required
                  maxLength={25}
                />
                {input.name ? '' : <ValidMsg msg={"Can't be blank."} />}
              </div>
              <div className="flex flex-col m-4 mt-8 gap-3">
                <label className="tracking-widest text-[14px]">
                  CARD NUMBER
                </label>
                <input
                  className={`p-2  w-[450px] text-xl h-[45px] rounded-lg   border-[2px] focus:outline-purple-900 ${
                    input.card_num ? '' : 'border-red-500'
                  }`}
                  type="text"
                  maxLength={16}
                  minLength={16}
                  placeholder="e.g. 1234 5678 9123 0000"
                  onChange={handleChange}
                  name="card_num"
                  onFocus={() => setInput({ ...input, card_num: true })}
                  // value={form.card_num}
                  // required
                />
                {input.card_num ? (
                  ''
                ) : (
                  <ValidMsg msg={'Wrong format, numbers only'} />
                )}
              </div>
              <div className="flex flex-row m-4 mt-8 justify-between items-start">
                <div className="flex gap-2 flex-col justify-between">
                  <label className="tracking-widest text-[14px]">
                    EXP DATE (MM / YY)
                  </label>
                  <div className="flex gap-3">
                    <input
                      className={`p-2  w-[70px] h-[45px] rounded-lg    border-[2px] text-xl focus:outline-purple-900  ${
                        input.exp_month ? '' : 'border-red-500'
                      }`}
                      type="text"
                      placeholder="MM"
                      onChange={handleChange}
                      name="exp_month"
                      onFocus={() => setInput({ ...input, exp_month: true })}
                      // value={form.exp_month}
                      // required
                      maxLength={2}
                    />
                    <input
                      className={`p-2  w-[70px] h-[45px] rounded-lg    border-[2px] text-xl focus:outline-purple-900  ${
                        input.exp_year ? '' : 'border-red-500'
                      }`}
                      type="text"
                      placeholder="YY"
                      onChange={handleChange}
                      name="exp_year"
                      onFocus={() => setInput({ ...input, exp_year: true })}
                      // value={form.exp_year}
                      // required
                      maxLength={2}
                    />
                  </div>
                  {input.exp_year && input.exp_month ? (
                    ''
                  ) : (
                    <ValidMsg msg={"2 digits, Can't be blank."} />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="tracking-widest text-[14px]">CVC</label>
                  <div>
                    <input
                      className={`p-2  w-[150] h-[45px] mb-[8px] rounded-lg    border-[2px] text-xl focus:outline-purple-900 ${
                        input.cvc ? '' : 'border-red-500'
                      }`}
                      type="text"
                      placeholder="e.g. 123"
                      onChange={handleChange}
                      name="cvc"
                      onFocus={() => setInput({ ...input, cvc: true })}
                      // value={form.cvc}
                      // required
                      maxLength={3}
                    />
                    {input.cvc ? '' : <ValidMsg msg={"Can't be blank."} />}
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="w-[450px] h-[60px] bg-veryDark text-white mt-8 rounded-lg text-xl">
                  Confrim
                </button>
              </div>
            </form>
          </div>
        )}
        {/* ^ end of second div */}
      </div>
    </>
  )
}

export default App
