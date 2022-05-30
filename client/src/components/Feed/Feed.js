import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import feedcss from "./Feed.module.css";
import axios from "axios";
import picture from "../Images/profile_pic.png";

export default function Feed() {
  const [feedData, setFeedData] = useState([]);

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const urlApi = "http://localhost:3001/api/posts/timeline/all/" + id;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(urlApi, {
          params: { token: token },
        });
        await setFeedData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className={feedcss.outer}>
        <div className={feedcss.inner}>
          {feedData.map((data, index) => {
            return (
              <div className={feedcss.box} key={index}>
                <div className={feedcss.post}>
                  <img src={picture} alt="profile picture"/>
                  <h4>{data.userName}</h4>
                  <img className={feedcss.image} src={process.env.PUBLIC_URL + data.img +".jpg" } />
                  <div className={feedcss.naming}><p>{data.description}</p></div>
                </div>
                {/*<div className={feedcss.naming}>{data.description}</div>*/}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
