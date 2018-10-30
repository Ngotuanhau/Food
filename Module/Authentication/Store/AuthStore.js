import { connect } from 'react-redux';
import { loginUser } from '../Action/actions';

import LoginComponent from '../Component/LoginComponent';
//import SignupComponent from '../Component/SignupComponent';

const mapStateToProps = (state) => {

    return ({

        // logged: state.authReducer.logged,
        // loading: state.authReducer.loading,
        //logged: state.AuthReducer.logged,
        restoring: state.sessionReducer.restoring,
        loading: state.sessionReducer.loading,
        user: state.sessionReducer.user,
        error: state.sessionReducer.error,
        logged: state.sessionReducer.logged,
    })

};

const mapDispatchToProps = {

    login: loginUser,
    // signupUser,

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);