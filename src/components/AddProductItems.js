import styled from "styled-components";
import { useState } from "react";
import { resolveComponentProps } from "@mui/base";
import { RequestQuoteRounded } from "@mui/icons-material";
const AddProductItemsContainer = styled.div`
  margin: 0 auto;
  width: 50%;
`;
const Form = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  background: lightGrey;
  box-shadow: 2px 0px 4px lightGrey;
  margin: 1em;
  border-radius: 5px;
`;

const AddProductImage = styled.img`
  display: flex;
  width: 10%;
  gap: 2em;
  flex-direction: row;
`;

const Input = styled.input`
  padding: 1em 5em;
  margin: 1em;
  font-size: 1rem;
  border: 2px solid orange;
  border-radius: 6px;
`;

const TextArea = styled.textarea`
  padding: 1em 5em;
  margin: 1em;
  font-size: 1rem;
  border: 2px solid orange;
  border-radius: 6px;
`;
const SelectDropDown = styled.select`
  padding: 1em 5em;
  margin: 1em;
  font-size: 1rem;
  border-radius: 1px solid orange;
  cursor: pointer;
  font-size: 1rem;
  border: 2px solid gray;
  border-radius: 6px;
`;
const SelectedOptions = styled.option`
  color: gray;
  font-weight: bold;
`;
const AddProductButton = styled.input`
  padding: 1em 3em;
  // background-color:silver;
  color: gray;
  border: 2px solid orange;
  margin: 1em;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
`;

const AddProductItemsLabel = styled.label`
  color: gray;
  margin-left: 5em;
  font-weight: bold;
`;

const AddProductItems = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productImage: "",
    productPrice: 0,
    productDescription: "",
    productDetailedDescription: "",
    productCategories: "",
    galleryImages: [],
    onOffer: "Not on Offer",
  });

  const [galleryPreview, setGalleryPreview] = useState([]);

  const [img, setImg] = useState("");

  const images = (e, type) => {
    // const file = (e.target.files[0])
    // const fileReader = new FileReader()
    // fileReader.readAsDataURL(file)
    // fileReader.onload = () => {
    //   console.log(fileReader.result)
    //   setImg(fileReader.result)
    // }
    // fileReader.onerror = (error) => { console.log(error) }

    const files = e.target.files;
    Array.from(files).forEach((file) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (type == "single") {
          setImg(fileReader.result);
          setFormData((prev) => ({ ...prev, ProductImage: fileReader.result }));
        } else {
          setFormData((prev) => ({
            ...prev,
            galleryImages: [...prev.galleryImages, fileReader.result],
          }));
          setGalleryPreview((prev) => [...prev, fileReader.result]);
        }
      };
    });

    // const base64 = (file) => {
    //   return new Promise((resolve, reject) => {
    //     const fileReader = new FileReader();
    //     fileReader.onload = () => resolve(fileReader.result);
    //     fileReader.onerror = (error) => reject(error);
    //   });
    // };
  };

  return (
    <AddProductItemsContainer>
      <Form>
        <Input
          type="Text"
          placeholder="Product Name"
          onChange={(e) =>
            setFormData({ ...formData, productName: e.target.value })
          }
        />
        <Input
          type="Text"
          placeholder="Product Description"
          onChange={(e) =>
            setFormData({ ...formData, productDescription: e.target.value })
          }
        />

        <Input
          type="Text"
          placeholder="Product Price"
          onChange={(e) =>
            setFormData({ ...formData, productPrice: parseInt(e.target.value) })
          }
        />

        <Input
          type="Text"
          placeholder="Sale Price"
          onChange={(e) =>
            setFormData({ ...formData, salePrice: parseInt(e.target.value) })
          }
        />

        <SelectDropDown onChange={(e) => onOffer(e, "Not On Offer")}>
          <SelectedOptions> On offer</SelectedOptions>
          <SelectedOptions selected>Not on offer</SelectedOptions>
        </SelectDropDown>

        <TextArea
          type="Text"
          placeholder="Detailed Description"
          onChange={(e) =>
            setFormData({
              ...formData,
              productDetailedDescription: e.target.value,
            })
          }
        />
        <SelectDropDown
          onChange={(e) =>
            setFormData({ ...formData, productCategories: e.target.value })
          }
        >
          <SelectedOptions disabled selected>
            PLease select Your Category
          </SelectedOptions>
          <SelectedOptions>Pottery</SelectedOptions>
          <SelectedOptions>Weavery</SelectedOptions>
          <SelectedOptions>Beadwork</SelectedOptions>
          <SelectedOptions>Attire</SelectedOptions>
          <SelectedOptions>Decoration</SelectedOptions>
          <SelectedOptions>Sculpture</SelectedOptions>
        </SelectDropDown>

        <AddProductItemsLabel>Products images</AddProductItemsLabel>
        <Input type="file" onChange={(e) => images(e, "single")} />
        <AddProductImage src={img} />

        <AddProductItemsLabel>Gallery images</AddProductItemsLabel>
        <Input type="file" multiple onChange={(e) => images(e, "multiple")} />
        <div style={{ display: "flex", gap: "2em" }}>
          {galleryPreview.map((item) => {
            return <AddProductImage src={item} />;
          })}
        </div>

        <AddProductButton
          type="button"
          onClick={() => console.log(formData)}
          value="Add Product"
        />
      </Form>
    </AddProductItemsContainer>
  );
};
export default AddProductItems;
