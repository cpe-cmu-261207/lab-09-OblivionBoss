import React from "react";
import Hyperlink from "../components/hyperlink";
import Navbar from "../components/Navbar";

export default function contacts() {
  const contentBar = {
    backgroundColor: "#f8f8ff",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  };

  return (
    <div>
      <Navbar key="contacts" link="contacts" />

      <div class="mx-5 py-4" style={contentBar}>
        <div
          style={{ alignContent: "center" }}
          class="m-4 vstack d-flex justify-content-center"
        >
          <div class="m-3">
            <h1 style={{ textAlign: "center" }}>Contacts</h1>
            <hr />
          </div>

          <div class="m-4 d-flex justify-content-center overflow-hidden px-2">
            <img
              src="./me.jpg"
              alt=""
              width="150px"
              height="150px"
              style={{ objectFit: "cover" }}
              class="rounded-circle my-auto"
            />
            <table class="mx-4">
              <tr>
                <tr>
                  <th>Fullname</th>
                  <td>Nutthachai Singkaewvong</td>
                </tr>
                <tr>
                  <th>Nickname</th>
                  <td>Boss</td>
                </tr>
                <tr>
                  <th>Facebook</th>
                  <td>
                    <Hyperlink
                      key="https://www.facebook.com/BendingBossTH/"
                      content="https://www.facebook.com/BendingBossTH/"
                      link="https://www.facebook.com/BendingBossTH/"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>
                    <Hyperlink
                      key="https://mail.google.com/mail/?view=cm&fs=1&to=nutthachai_sing@cmu.ac.th"
                      content="nutthachai_sing@cmu.ac.th"
                      link="https://mail.google.com/mail/?view=cm&fs=1&to=nutthachai_sing@cmu.ac.th"
                    />
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>+66 98 001 1576</td>
                </tr>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
