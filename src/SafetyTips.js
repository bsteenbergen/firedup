import React, { useState } from "react"
import "./SafetyTips.css"
import Home from "./Home.js"

const SafetyTips = ({setPage}) => {
  
  return (
    <div className="safetytips">
      <h1>Stay Safe Friends</h1>
      <button id= "homeB" onClick={() => setPage("home")}> Home </button>
      <h2>Tips from American Red Cross</h2>
      <div>
        <ol>Install smoke alarms on every level of your home, 
            inside bedrooms and outside sleeping areas. </ol>
        <ol>Test smoke alarms every month. If they’re not working, 
            change the batteries.</ol>
        <ol>Talk with all family members about a fire escape plan and 
            practice the plan twice a year.</ol>
        <ol>If a fire occurs in your home, GET OUT, STAY OUT and CALL FOR HELP. 
            Never go back inside for anything or anyone.</ol>
      </div>
      <h2>Tips from Township of Edison</h2>
      <div>
        <ol>If your clothes catch fire, don't run. Stop where you are, drop to the 
          ground, cover your face with your hands, and roll over and over to smother 
          the flames. Cool the burn with water and call for help.</ol>
        <ol>If you encounter smoke while you are escaping from a fire, 
          use an alternative escape route. If you must escape through smoke, 
          crawl on your hands and knees, keeping your head 12 to 24 inches 
          (30 to 60 centimeters) above the floor, where the air will be cleaner.</ol>
        <ol>Run cool water over a burn for 10 to 15 minutes. Never apply ice. 
          Never put butter or any other grease on a burn. If the burned skin blisters 
          or is charred, see a doctor immediately.</ol>
        <ol>If an electric appliance smokes or has an unusual smell, unplug it immediately, 
          then have it serviced before using it again. Replace any electrical cord that is 
          cracked or frayed. Plug only one electrical cord into each receptacle. 
          Avoid running any cords under rugs. Don't tamper with your fuse box or use improper-size fuses.</ol>
        <ol>Keep portable heaters and space heaters at least three feet (one meter) 
          away from anything that can burn. Keep children and pets away from heaters, 
          and turn them off when you leave home or go to sleep.</ol>
        <ol>Always stay near cooking to monitor it closely. Keep cooking areas clear of 
          combustibles, and wear clothes with short, rolled-up, or tight-fitting sleeves 
          when you cook. Turn pot handles inward on the stove where you can't bump them and 
          children can't grab them. Enforce a "kid-free" zone three feet (one meter) around your 
          kitchen range. If grease catches fire in a pan, slide a lid over the pan to smother 
          the flames and turn off the heat source. Leave the lid on until the pan is completely cool.</ol>
        <ol> Use only child-resistant lighters and store all matches and lighters up high, 
          where kids can't see or reach them, preferably in locked cabinet. Teach children 
          that matches and lighters are tools, for grown-ups only. Teach young children to 
          tell a grown-up if they find matches or lighters; older children should bring matches 
          and lighters to an adult immediately.</ol>
        <ol> Careless smoking is the leading cause of fire deaths in North America. 
          Smoking in bed or when you are drowsy could be fatal. Provide smokers with large, 
          deep, non-tip ashtrays, and soak butts with water before discarding them. Before going 
          to sleep or leaving home after someone has been smoking, check under cushions and around 
          upholstered furniture for smoldering cigarettes.</ol>
          
      </div>
    </div>
  )
}

export default SafetyTips
