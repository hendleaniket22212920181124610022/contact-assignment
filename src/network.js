import axios from "axios";

export const addContactOnServer = async (name, phone) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER}/contacts.json`,
      { name, phone }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllContacts = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}/contacts.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateContactOnServer = async (name, phone, id) => {
  try {
    const { data } = await axios.patch(
      `${process.env.REACT_APP_SERVER}/contacts/${id}.json`,
      { name, phone }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteContactOnServer = async (id) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_SERVER}/contacts/${id}.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getContactById = async (id) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER}/contacts/${id}.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};