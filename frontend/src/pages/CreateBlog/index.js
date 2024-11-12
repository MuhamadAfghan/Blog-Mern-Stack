import React, { useState } from "react";
import { Button, Gap, Input, Textarea, Upload } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [img_preview, setImgPreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    body: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    body: "",
    image: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.title.length < 5 || form.body.length < 5) {
      setErrors({
        title:
          form.title.length < 5 ? "Title must be at least 5 characters" : "",
        body: form.body.length < 5 ? "Body must be at least 5 characters" : "",
      });
      return;
    }

    axios
      .post("http://localhost:4000/v1/posts", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("success", res);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      image: file,
    });

    setImgPreview(URL.createObjectURL(file));
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, title: value });
    setErrors({
      ...errors,
      title: value.length < 5 ? "Title must be at least 5 characters" : "",
    });
  };

  const handleBodyChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, body: value });
    setErrors({
      ...errors,
      body: value.length < 5 ? "Body must be at least 5 characters" : "",
    });
  };

  return (
    <div>
      <Gap height={20} />
      <div className="button-back">
        <Button onClick={() => navigate("/")}>Back</Button>
      </div>
      <Gap height={10} />
      <h1>Create New Blog Post</h1>
      <form onSubmit={onSubmit}>
        <Input
          label="Post Title"
          onChange={handleTitleChange}
          placeholder="Title here"
        />
        {errors.title && <p className="error-message">{errors.title}</p>}
        <Gap height={10} />
        <Upload img={img_preview} onChange={(e) => onImageUpload(e)} />
        <Gap height={10} />
        <Textarea onChange={handleBodyChange} />
        {errors.body && <p className="error-message">{errors.body}</p>}
        <Gap height={20} />
        <div className="button-action">
          <Button type="submit">Publish</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
