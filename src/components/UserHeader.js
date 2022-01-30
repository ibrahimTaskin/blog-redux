import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }
  render() {
      const {user} = this.props;
      //console.log(this.props.users);
      //const user = this.props.users.find((user) => user.id === this.props.userId);
      if(!user) return null;
    return (
      <div>
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
    return {user:state.users.find(user => user.id === props.userId)}
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);
