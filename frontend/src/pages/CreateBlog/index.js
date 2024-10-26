import React from "react";
import { Button, Gap, Input, Textarea, Upload } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Gap height={20} />
      <div class="button-back">
        <Button onClick={() => navigate("/")}>Back</Button>
      </div>
      <Gap height={10} />
      <h1>Create New Blog Post</h1>
      <form action="">
        <Input label="Post Title" placeholder="Title here" />
        <Gap height={10} />
        <Upload />
        <Gap height={10} />
        <Textarea />
        <Gap height={20} />
        <div class="button-action">
          <Button type="submit">Publish</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
