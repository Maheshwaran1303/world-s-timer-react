import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

const countries = [
  { countryName: "Afghanistan", timezone: "Asia/Kabul" },
  { countryName: "Australia (Sydney)", timezone: "Australia/Sydney" },
  { countryName: "Brazil (Sao Paulo)", timezone: "America/Sao_Paulo" },
  { countryName: "Canada (Toronto)", timezone: "America/Toronto" },
  { countryName: "China", timezone: "Asia/Shanghai" },
  { countryName: "Egypt", timezone: "Africa/Cairo" },
  { countryName: "France", timezone: "Europe/Paris" },
  { countryName: "Germany", timezone: "Europe/Berlin" },
  { countryName: "India", timezone: "Asia/Kolkata" },
  { countryName: "Japan", timezone: "Asia/Tokyo" },
  { countryName: "Mexico", timezone: "America/Mexico_City" },
  { countryName: "Russia (Moscow)", timezone: "Europe/Moscow" },
  { countryName: "South Africa", timezone: "Africa/Johannesburg" },
  { countryName: "United Kingdom", timezone: "Europe/London" },
  { countryName: "United States (New York)", timezone: "America/New_York" },
  { countryName: "United States (Los Angeles)", timezone: "America/Los_Angeles" }
];


const App = () => {
  const [time, setTime] = useState(moment()) // When you import and call moment(), it returns a Moment object that represents the current date and time.

  useEffect(
    () => {
      const interval = setInterval(
        () => {
          setTime(moment())
        }, 1000
      )

      return () => {
        clearInterval(interval)
      }
    }, []
  )

  return (
    <div 
      className='bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900 min-h-screen'
    >
      <div
        className='w-9/12 mx-auto py-12'
      >
        <h1
          className='text-4xl font-bold text-white text-center'
        >
          World's Timer
        </h1>
        <div
          className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-12 '
        >
          {
            countries.map(
              (country, index) => (
                <div 
                  className='bg-white rounded-lg p-8 shadow hover:scale-120 duration-300 hover:shadow-lg cursor-pointer '
                  key={index}
                >
                  <h1 className='text-xl font-semibold text-rose-600'>{country.countryName}</h1>
                  <h1 
                    className='text-4xl font-semibold text-gray-800 mt-4'
                  >
                    {
                      time.tz(country.timezone).format('hh:mm:ss A')
                    }
                  </h1>
                </div>
              )
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
