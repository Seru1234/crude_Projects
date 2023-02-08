import React, { useState } from "react";
import "../App.css";

const Home = () => {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
  });
  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex], inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        fname: "",
        lname: "",
        email: "",
        contact: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        fname: "",
        lname: "",
        email: "",
        contact: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];

    setInputs({ fname: tempData.fname, lname: tempData.lname, email: tempData.email, contact: tempData.contact });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className=" container">
      <div className="mainForme">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label>Name</label>
            <input name="fname" value={inputs.fname} onChange={handleChange} />
          </div>
          <div className="">
            <label>Name</label>
            <input name="lname" value={inputs.lname} onChange={handleChange} />
          </div>

          <div className="">
            <label>Email</label>
            <input type="email" name="email" value={inputs.email} onChange={handleChange} />
          </div>

          <div className="">
            <label>Mobile</label>
            
            <input name="contact" value={inputs.contact} onChange={handleChange} />
          </div>

          <div className='skills'>
            <div>
              <label htmlFor='email' style={{ fontSize: "20px",marginright: "12px", padding: "9px 6px" }}>Skills</label>

            </div>
            <div>
              <select name="cars" id="cars" style={{ fontSize: "18px",padding: "4px 50px" }}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="CSS3">CSS3</option>
                <option value="JQuery">JQuery</option>
                <option value="React">React</option>
                <option value="Javascript">Javascript</option>
              </select>
            </div>

          </div>

          <button type="submit" className="btnsbt">
            {editClick ? "update" : "Add"}
          </button>
        </form>
      </div>
      <div>

        <table className="mytable">
          <thead>
            <tr>
              <th>Name</th>
              <th>lName</th>
              <th>Email</th>
              <th>contact</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {tableData.map((item, i) => (
              <tr>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>


                <td>
                  <button
                    onClick={() => handleEdit(i)}
                    className="btntd1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-500 btntd2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
