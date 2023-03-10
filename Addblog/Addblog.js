import React from "react";

function Addblog() {
  return (
    <>
      <button className="button3">
        <img src="Vector.png" height="12px" width="12px" />
      </button>
      <div className="container">
        <div className="title">Add Blog</div>
        <form action="#">
          <div className="blog-deatils">
            <div className="input-box">
              <span className="details">Blog Title</span> <br />
              <input type="text" placeholder="Name" required="" />
            </div>
            <div className="input-box">
              <span className="details">Author Name</span> <br />
              <input type="text" placeholder="Author Name" required="" />
            </div>
            <div className="box">
              <span className="details">Description</span> <br />
              <input
                type="text"
                defaultValue=""
                maxLength={5000}
                placeholder="Write here"
                id="desc"
                required=""
              />
            </div>
            <span
              className=" max row justify-content-end text-secondary"
              style={{ fontSize: 18 }}
            >
              0-5000
            </span>
            <div className="Add Image">
              <input
                type="file"
                id="file"
                className="invisible"
                style={{ margin: 0 }}
              />
              <label
                htmlFor="file"
                id="uploadBtn"
                className="d-flex justify-content-start "
              >
                <img className="flex-start" />+ Add Image
              </label>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="Date">
                Date
                <br />
                <input type="date" name="bday" required="" pattern="" />
              </div>
              <div className="Read-Time">
                Read Time
                <br />
                <input type="time" />
              </div>
            </div>
            <div className="input-box tag">
              <span className="details">Add tag</span> <br />
              <select id="Add-tag">
                <option value="Add tag">Select tag</option>
                <option value="Data Structures and Algorithms">
                  Data Structures and Algorithms
                </option>
                <option value="Interview Preperation">
                  Interview Preperation
                </option>
                <option value="Competitive Programming">
                  Competitive Programming
                </option>
                <option value="Time and Space Complexities ">
                  Time and Space Complexities{" "}
                </option>
                <option value="Student Experience">Student Experience</option>
                <option value="About Us">About Us</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <button className="button2">Publish</button>
    </>
  );
}

export default Addblog;
