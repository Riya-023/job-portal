import "../App.css";
import Navbar from "./navbar";
import Header from "./Header";
import SearchBar from "./SearchBar";
import JobCard from "./JobCard";
// import JobDummyData from "./JobDummyData";
import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs, where  } from "firebase/firestore";
import { db } from "../firebase.config";

function App() {
  const [jobs, setJobs]= useState([]);

  const fetchJobs = async() =>{
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async(jobCriteria) =>{
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type),where("title", "==", jobCriteria.title),where("experience", "==", jobCriteria.experience),where("location", "==", jobCriteria.location), orderBy("postedOn", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  useEffect(()=>{
    fetchJobs()
  },[])
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <SearchBar fetchJobsCustom={fetchJobsCustom} />
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </>
  );
}

export default App;
