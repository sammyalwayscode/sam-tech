/* eslint-disable react/prop-types */
import styled from "styled-components";
import { TbArrowBigUpLines } from "react-icons/tb";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import Swal from "sweetalert2";
// import { useEffect, useState } from "react";

const NewEntery = ({ storePost }) => {
  // const [logo, setLogo] = useState(null);
  // const [title, setTitle] = useState("");
  // const [image, setImage] = useState(null);
  // const [description, setDescription] = useState("");
  // const [storePost, setStorePost] = useState(() => {
  //   const saveData = localStorage.getItem("storePost");
  //   return saveData ? JSON.parse(saveData) : [];
  // });

  // const createPost = () => {
  //   const logoURL = URL.createObjectURL(logo);
  //   const imageURL = URL.create ObjectURL(image);
  //   setStorePost([
  //     ...storePost,
  //     { logo: logoURL, title, image: imageURL, description },
  //   ]);
  // };

  // useEffect(() => {
  //   localStorage.setItem("storePost", JSON.stringify(storePost));
  // }, [storePost]);

  const alertUser = () => {
    Swal.fire({
      title: "Update Coming Soon!",
      text: "The detail page is not yet available",
      icon: "info",
    });
  };

  console.log("This is from new entry", storePost);

  return (
    <Container>
      {/* <Input>
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
      </Input> */}

      {/* this is the demacation between the Input and the data */}

      {storePost.map((data, i) => (
        <Card key={i} onClick={alertUser}>
          <CardLogo>
            <img src={data.logo} alt="icon" />
          </CardLogo>
          <CardTitle> {data.title} </CardTitle>

          <DateTime>date ● time min ago</DateTime>

          <CardImage>
            <img src={data.image} alt="Card Image" />
          </CardImage>
          <CardIcons>
            <section>
              <TbArrowBigUpLines />
              <span> 22 </span>
            </section>
            <section>
              <FaRegComments />
              <span> 22 </span>
            </section>
            <section>
              <MdOutlineBookmarkBorder />
              <span> 22 </span>
            </section>
            <section>
              <FaLink />
            </section>
          </CardIcons>
        </Card>
      ))}
    </Container>
  );
};

export default NewEntery;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0px;
`;

const Card = styled.div`
  height: 400px;
  width: 310px;
  background-color: #f5f8fc;
  border: 1px solid lightgray;
  margin: 10px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 500px) {
    width: 95%;
  }
`;
const CardLogo = styled.div`
  /* background-color: aqua; */
  display: flex;
  align-items: center;

  margin-bottom: 15px;
  img {
    height: 35px;
    width: 35px;
    border-radius: 50px;
    /* background-color: red; */
    border: 0.5px solid lightgray;
    object-fit: cover;
  }
`;
const CardTitle = styled.div`
  font-weight: 800;
  height: 100px;
  /* background-color: pink; */
`;
const DateTime = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #3b3b3b;
  margin: 5px 0px;
`;
const CardImage = styled.div`
  height: 170px;
  /* background-color: brown; */
  border-radius: 15px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    border: 0.5px solid lightgray;
  }
`;
const CardIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
    transition: all 350ms;

    &:hover {
      background-color: rgb(134 239 172);

      border-radius: 3px;
      transition: all 350ms;
    }

    span {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

// const Input = styled.div`
//   height: 400px;
//   width: 310px;
//   background-color: #f5f8fc;
//   border: 1px solid lightgray;
//   margin: 10px;
//   border-radius: 15px;
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
//     rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
//   padding: 1rem;
// `;

// const InputHold = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 10px 0px;

//   label {
//     font-size: 14px;
//     font-weight: 700;
//   }

//   input {
//     width: 300px;
//     background-color: #eee;
//     height: 40px;
//     font-family: Montserrat;
//     outline: none;
//     border: none;
//   }

//   textarea {
//     height: 100px;
//     resize: vertical;
//     font-family: Montserrat;
//   }
// `;

// const Button = styled.button`
//   height: 35px;
//   width: 100%;
//   outline: none;
//   border: none;
//   background-color: lightblue;
//   font-family: Montserrat;
//   font-weight: 700;
//   color: #fff;
//   cursor: pointer;
// `;
