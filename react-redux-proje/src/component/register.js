import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as categoryActions from "../redux/actions/categoryActions"
import * as AddAction from "../redux/actions/AddAction"


class register extends Component {
    componentDidMount() {
        
        this.props.action.getCategories("name")
        this.props.name1.dispatch(this.props.action.add("sarper"))
    }
    
    render() {
        return (
            <div>
                <h1>
                    seçili:{this.props.currentCategory}
                </h1>
                <h1>
                    seçili:{this.props.name1[0].name}
                </h1>
                <h1>
                    register
                </h1>
                <form>
                    <label>first name:</label><br />
                    <input type="text" name="username" id="name" ></input><br />
                </form>

            </div>
        )
    }
}
/*
*/
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        name1 :state.AddReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: {
            getCategories: bindActionCreators(categoryActions.changeCategory, dispatch),
            add: bindActionCreators(AddAction.Addname, dispatch)
        }
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(register);