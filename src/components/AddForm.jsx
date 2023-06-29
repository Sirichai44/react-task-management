import React from "react";
import "./AddForm.css";

const AddForm = (props) => {
  const { title, setTitle, saveTask, editId } = props;
  return (
    <>
      <h2>แบบฟอร์มจัดการงาน</h2>
      <form onSubmit={saveTask}>
        <div className="form-control">
          <input
            type="text"
            name=""
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? "อัพเดท" : "เพิ่ม"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
