<template>
  <div class="container">
    <div class="left_side">
      <div class="profileTxt">
        <h2>Mark Lemuel B. Furton<br /><span>Web Developer</span></h2>
      </div>

      <div class="contactinfo">
        <h3 class="title">Contact Info</h3>
        <ul>
          <li>
            <span class="text">+63 997 769 5119</span>
          </li>
          <li>
            <span class="text">marklembu@gmail.com</span>
          </li>
          <li>
            <span class="text">fb.me/lemuelfurton.012/</span>
          </li>
          <li>
            <span class="text">Mabalacat City, Pampanga, Philippines</span>
          </li>
        </ul>
      </div>

      <div class="contactinfo educ">
        <h3 class="title">Education</h3>
        <ul>
          <li>
            <h5>2018 - 2020</h5>
            <h4>Senior High School</h4>
            <h4>Systems Plus College Foundation</h4>
          </li>
          <li>
            <h5>2020 - 2024</h5>
            <h4>Bachelor of Science in Information Technology</h4>
            <h4>Holy Angel University</h4>
          </li>
        </ul>
      </div>

      <div class="contactinfo lang">
        <h3 class="title">Language</h3>
        <ul>
          <li>
            <span class="text">English</span>
            <span class="percent">
              <div style="width: 75%;"></div>
            </span>
          </li>
          <li>
            <span class="text">Filipino</span>
            <span class="percent">
              <div style="width: 89%;"></div>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="right_side">
      <div class="about">
        <h2 class="title2">Profile</h2>
        <p class="me">
          Hi! I'm Mark Lemuel B. Furton. Highly organized and graduate from the
          Holy Angel University seeking an entry-level position as an Web
          Developer. Served as a peer tutor for courses such as web development,
          engineering, and accounting principles and legislation.
        </p>
      </div>
      <div class="about">
        <h2 class="title2">Experience</h2>
        <div class="box">
          <div class="yc">
            <h5>2021 - Present</h5>
            <h5>GDSC HAU</h5>
          </div>
          <div class="tex">
            <h4>Web Development Lead</h4>
            <p>
              Maintain high standards of software quality within the team by
              establishing good practices and habits.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="yc">
            <h5>2021 - Present</h5>
            <h5>Code Geeks</h5>
          </div>
          <div class="tex">
            <h4>Public Relation and Information, Head</h4>
            <p>
              Manage PR issues and edit and update promotional material and
              publications
            </p>
          </div>
        </div>
        <div class="box">
          <div class="yc">
            <h5>2021 - Present</h5>
            <h5>Valiant Esports</h5>
          </div>
          <div class="tex">
            <h4>Caster</h4>
            <p>Casting a small events and willing to do more about it</p>
          </div>
        </div>
      </div>

      <div class="about skills">
        <h2 class="title2">Professional Skills</h2>
        <div class="box">
          <h4>HTML</h4>
          <div class="percent">
            <div style="width: 82%;"></div>
          </div>
        </div>
        <div class="box">
          <h4>CSS</h4>
          <div class="percent">
            <div style="width: 88%;"></div>
          </div>
        </div>
        <div class="box">
          <h4>Javascript</h4>
          <div class="percent">
            <div style="width: 75%;"></div>
          </div>
        </div>
        <div class="box">
          <h4>Java</h4>
          <div class="percent">
            <div style="width: 71%;"></div>
          </div>
        </div>
        <div class="box">
          <h4>Python</h4>
          <div class="percent">
            <div style="width: 78%;"></div>
          </div>
        </div>
        <div class="box">
          <h4>Photoshop</h4>
          <div class="percent">
            <div style="width: 64%;"></div>
          </div>
        </div>
      </div>

      <div class="about interest">
        <h2 class="title2">Interest</h2>
        <ul>
          <li><i class="fa fa-gamepad" aria-hidden="true"></i>Gaming</li>
          <li><i class="fa fa-trophy" aria-hidden="true"></i>Sports</li>
          <li><i class="fa fa-music" aria-hidden="true"></i>Music</li>
          <li><i class="fa fa-television" aria-hidden="true"></i>Movie</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Anton", sans-serif;
  font-family: "Poppins", sans-serif;
}

/* background */
body {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* resume */

.container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 1000px;
  margin: 50px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0px 35px 55px rgba(0, 0, 0, 0.1);
}

/* orange side */
.container .left_side {
  position: relative;
  background: #ffe1c8;
  padding: 40px;
}

.profileTxt {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.profileTxt .imgbx {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.profileTxt .imgbx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profileTxt h2 {
  color: rgb(255, 171, 60);
  font-size: 1.5em;
  margin-top: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  line-height: 1.4em;
}

.profileTxt h2 span {
  font-size: 0.8em;
  font-weight: 300;
}

.contactinfo {
  padding-top: 40px;
}

.title {
  color: rgb(255, 171, 60);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.contactinfo ul {
  position: relative;
}

.contactinfo ul li {
  position: relative;
  list-style: none;
  margin: 10px 0;
  cursor: pointer;
}

.contactinfo ul li .icon {
  display: inline-block;
  width: 30px;
  font-size: 18px;
  color: #ff943c;
}

.contactinfo ul li span {
  color: rgb(255, 171, 60);
  font-weight: 300;
}

.educ li {
  margin-bottom: 15px;
}

.educ h5 {
  color: #ff943c;
  font-weight: 500;
}

.educ h4 {
  color: rgb(255, 171, 60);
  font-weight: 300;
}

.lang .percent {
  position: relative;
  width: 100%;
  height: 6px;
  background: rgba(255, 170, 60, 0.472);
  display: block;
  margin-top: 5px;
}
.lang .percent div {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background: #ff943c;
}

/* white side */
.container .right_side {
  position: relative;
  background: #fff;
  padding: 40px;
}

.about {
  margin-bottom: 50px;
}
.about:last-child {
  margin-bottom: 0;
}
.title2 {
  color: #ff943c;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}
.me {
  color: rgb(255, 171, 60);
}
.about .box {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
}
.about .box .yc {
  min-width: 150px;
}
.about .box .yc h5 {
  text-transform: uppercase;
  color: rgb(255, 171, 60);
  font-weight: 600;
}
.about .box .tex h4 {
  text-transform: uppercase;
  color: #ff943c;
  font-size: 16px;
}
p {
  color: #ff943c;
}
.skills .box {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  justify-content: center;
  align-items: center;
}
.skills .box h4 {
  text-transform: uppercase;
  color: rgb(255, 171, 60);
  font-weight: 500;
}
.skills .box .percent {
  position: relative;
  width: 100%;
  height: 10px;
  background: #ffe1c8;
}
.skills .box .percent div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #ff943c;
}
.interest ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.interest ul li {
  list-style: none;
  color: rgb(255, 171, 60);
  font-weight: 500;
  margin: 10px o;
}
.interest ul li .fa {
  color: #ff943c;
  font-size: 18px;
  width: 20px;
}

@media (max-width: 1000px) {
  .container {
    margin: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
  .interest ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .about .box {
    flex-direction: column;
  }
  .about .box .yc {
    margin-bottom: 5px;
  }
  .interest ul {
    grid-template-columns: repeat(1, 1fr);
  }
  .skills .box {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
