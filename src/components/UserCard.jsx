const tempUsers = [
  {
    name: "David",
    city: "New York",
    role: "Frontend Developer",
    skills: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "Git",
    ],
    online: true,
    profile: "images/1.jpg",
  },
  {
    name: "John Doe",
    city: "Edinburgh",
    role: "ReactJS Developer",
    skills: ["Ui/Ux Design", "HTML", "CSS", "JavaScript", "React", "NodeJS"],
    online: true,
    profile: "images/1.jpg",
  },
  {
    name: "Jane Smith",
    city: "San Francisco",
    role: "Backend Developer",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Python",
      "Django",
      "Git",
      "Docker",
    ],
    online: false,
    profile: "images/1.jpg",
  },
  {
    name: "Alice Johnson",
    city: "Austin",
    role: "Java Developer",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "AWS",
      "Maven",
      "REST APIs",
    ],
    online: true,
    profile: "images/1.jpg",
  },
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "Online" : "Offline"}
      </span>
      <img src={props.profile} className="img" alt="" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.role}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>

      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {/* <li>Ui/Ux Design</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li> */}
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export const UserCard = () => {
  return (
    <>
      {tempUsers.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          role={user.role}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
};

{
  /* <User
name="John Doe"
city="Edinburgh"
role="ReactJS Developer"
skills={["Ui/Ux Design", "HTML", "CSS", "JavaScript", "React", "NodeJS"]}
online={false}
profile="images/1.jpg"
/> */
}
