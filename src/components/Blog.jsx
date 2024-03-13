import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import people from "../assets/Layer 39.png";

const Blog = () => {
  const [likes, setLikes] = useState(196478);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleUnlike = () => {
    setLikes(likes - 1);
  };

  return (
    <Card className='bg-blue-400 px-3 py-2 rounded-2xl' id="blog">
      <h1 className='font-bold text-2xl text-white'>
        <b className='text-blue-700'>Join</b>{" "}
        <b className='text-blue-300'>FM</b>Blog{" "}
        <b className='text-blue-700'>on</b> Facebook
      </h1>
      <CardBody className='bg-white p-4'>
        <div className='flex items-center'>
          <div className='bg-blue-400 h-10 w-10 mx-3'></div>
          <CardTitle tag='h5'>
            <b className='text-blue-400'>Easy fm on Facebook</b>
            <br />
            You like this
          </CardTitle>
        </div>
        <CardText>
          A study is the Saturday Magazine of the Daily Nation states
          that the senior bachelor is more unlikely to get a promotion
          in the work place because he is single passed the required
          marriageable age. Over 45 and still single. Who says that
          getting married makes you a better person ???
        </CardText>
        <CardText>
          Marcus & Munene on the Easy Breakfast ........ 9 hours ago
          196,478 people like easy fm.
        </CardText>
        <CardText>
          Omar Tougeer Peter Sam Lisa Michael Caroline Sunado
        </CardText>
        <div className='d-flex justify-content-between'>
          <Button color='primary' onClick={handleLike}>
            Like
          </Button>
          <Button color='secondary' onClick={handleUnlike}>
            Unlike
          </Button>
          <span>{likes} people like easy fm.</span>
        </div>
        <img src={people}  alt='' />
      </CardBody>
    </Card>
  );
};

export default Blog;
