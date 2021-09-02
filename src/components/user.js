import React from 'react';

const User = (props) => {
  //console.log(props);
  if (!props.done) {
    return (<div>Users Loading...</div>);
  } else {
    return (
      <div style={{ paddingLeft: "1em" }}>
        <h1>Users List {props.title}</h1>
        {props.users.map((e, i) => {
          return (
            <div key={i} className="user">
              <div className="userdata">
                <div>
                  <p>
                    {e.first_name} {e.last_name}
                  </p>
                  <p>{e.email}</p>
                </div>
                <img src={e.avatar} alt="ava" />
              </div>
            </div>
          );
        })}
        <div style={{ paddingLeft: "1em" }}></div>
      </div>
    );
  }
};

export default User;
