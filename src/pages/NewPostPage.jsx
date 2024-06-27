import { useEffect, useState } from "react";
import styled from "styled-components";
import NewEntery from "../components/NewEntery";

const NewPostPage = () => {
  const [logo, setLogo] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [storePost, setStorePost] = useState(() => {
    const saveData = localStorage.getItem("storePost");
    return saveData ? JSON.parse(saveData) : [];
  });

  // const createPost = () => {
  //   const logoURL = URL.createObjectURL(logo);
  //   const imageURL = URL.createObjectURL(image);

  //   setStorePost([
  //     ...storePost,
  //     { logo: logoURL, title, image: imageURL, description },
  //   ]);
  // };

  const createPost = () => {
    if (logo && image && title && description) {
      const logoReader = new FileReader();
      const imageReader = new FileReader();

      logoReader.onloadend = () => {
        const logoURL = logoReader.result;
        imageReader.onloadend = () => {
          const imageURL = imageReader.result;
          const newPost = {
            logo: logoURL,
            title,
            image: imageURL,
            description,
          };
          setStorePost((prevPosts) => [...prevPosts, newPost]);
          setLogo(null);
          setTitle("");
          setImage(null);
          setDescription("");
        };
        imageReader.readAsDataURL(image);
      };
      logoReader.readAsDataURL(logo);
    } else {
      alert("All fields are required!");
    }
  };

  console.log(logo, title);
  console.log("storePost display", storePost);

  const clearData = () => {
    localStorage.removeItem("storePost");
    setStorePost([]);
  };

  useEffect(() => {
    localStorage.setItem("storePost", JSON.stringify(storePost));
  }, [storePost]);

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Post a New Tech Update</Title>
          <InputHold>
            <label>Select a Logo</label>
            <input type="file" onChange={(e) => setLogo(e.target.files[0])} />
          </InputHold>
          <InputHold>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter the title of your post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputHold>
          <InputHold>
            <label>Select Your Post Image</label>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </InputHold>
          <InputHold>
            <label>Post Details</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputHold>

          <Button onClick={createPost}>Post Update</Button>
        </Wrapper>
      </Container>

      <div>
        <Button onClick={clearData} style={{ backgroundColor: "red" }}>
          Clear Data
        </Button>
      </div>
      <section>
        <NewEntery storePost={storePost} setStorePost={setStorePost} />
      </section>
    </div>
  );
};

export default NewPostPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
const Wrapper = styled.div`
  width: 310px;
  /* background-color: red; */
  border: 1px solid #eee;
  padding: 10px;
`;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;

  label {
    font-size: 14px;
    font-weight: 700;
  }

  input {
    width: 300px;
    background-color: #eee;
    height: 40px;
    font-family: Montserrat;
    outline: none;
    border: none;
  }

  textarea {
    height: 150px;
    resize: vertical;
    font-family: Montserrat;
  }
`;
const Title = styled.h3`
  font-weight: 800;
`;

const Button = styled.button`
  height: 35px;
  width: 100%;
  outline: none;
  border: none;
  background-color: lightblue;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;
