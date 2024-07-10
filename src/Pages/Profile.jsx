import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Profile = ({ token }) => {
  const [resdata, setResData] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("http://localhost:5000/api/user/get-user", {
        headers: {
          'Content-Type':"application/json",
          'Authorization': `Bearer ${token}`
        },
      })
      .then((res) => {
        setResData(res.data.data);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  return (
    <div>
      {resdata.map((ele, index) => {
        return (
          <div key={index}>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <div className="card-header">{ele.username}</div>
                <div className="card-body">
                  <h5 className="card-title">{ele.email}</h5>
                  <h5 className="card-title">{ele.role}</h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;