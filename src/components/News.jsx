import React from "react";
import EachNews from "./EachNews";

function News(props) {
  return (
    <div className='rounded-lg bg-white' id="news">
      
      <h1 style={{fontSize:'1.5rem'}} className='text-sm lg:text-2xl mx-1 lg:mx-4'><b>Latest</b></h1>
      <div className=' bg-gray-200 p-1 lg:p-3 flex items-center justify-evenly lg:justify-start rounded-lg m-3 [&>*]:rounded-lg'>
        <h2 className='m-2 lg:mx-4 text-xl'><b>Showbiz</b></h2>
        <h2 className='m-2 lg:mx-4 text-xl bg-blue-400 p-3'>
          <b>Music</b>
        </h2>
        <h2 className='m-2 lg:mx-4  text-xl'><b>Funny</b></h2>
      </div>
      <div
        className='grid grid-cols-3 flex-wrap mx-4'
        style={{ marginTop: 20 }}
      >
        <EachNews data={<><b>Three strikes net rule</b>&nbsp;has been proposed in a front against illegal music file sharing .</> } image="https://cdn.discordapp.com/attachments/1158793729193287700/1161887571228495892/img-content-1.png?ex=6543299f&is=6530b49f&hm=e61c4c4003b361a20720f142cbdd39002be668963a0fc4f0dd89dd040a036206&" />
        <EachNews data={<><b>The Catholic Church</b> opens its door in the Vatican, to a flood of discontented Anglicans</>} image="https://cdn.discordapp.com/attachments/1158793729193287700/1161887571475968051/img-content-2.png?ex=6543299f&is=6530b49f&hm=0e12eae6e28c12ec353022bbfd5fab98b78a70bf95a79c5c3b8a954f2fbb51bc&"/>
        <EachNews data={<><b>An increase in game addiction</b> is attributed to a wide spread break down in social interaction</>} image="https://cdn.discordapp.com/attachments/1158793729193287700/1161887571731808296/img-content-3.png?ex=6543299f&is=6530b49f&hm=542f78dc383cd5e72894499231a65528429e16ea7cca1f51d237a2aecb614607&"/>
        <EachNews data={<><b>Jenson Button triumphant in Formula 1</b> after what can only be described as a shaky start.</>} image="https://cdn.discordapp.com/attachments/1158793729193287700/1161887571970887750/img-content-4.png?ex=6543299f&is=6530b49f&hm=ebce6ca12e79f5cfd181e31aa84a2418bb0a232d3a3b46cef32ab1a8d05bc693&"/>
        <EachNews data={<><b>iTunes for theatre service</b> marks a pivotal switch for an otherwise, traditional profession.</>} image="https://cdn.discordapp.com/attachments/1158793729193287700/1161887572277080184/img-content-5.png?ex=654329a0&is=6530b4a0&hm=b6a470cd3b105108e6e5559ce73414c569c3026c88732a24f732f9bf98265326&"/>
        <EachNews data={<><b>Professor jailed for stealing</b> and selling skulls from a series of burial grounds in China."</>} image="https://cdn.discordapp.com/attachments/1158793729193287700/1161887572641972327/img-content-6.png?ex=654329a0&is=6530b4a0&hm=388a77e6d98d5b2cb1bf87c44b661c78477ea1961c286e2da975e901752d10a3&"/>

      </div>
    </div>
  );
}

export default News;
