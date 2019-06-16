import React from 'react';

import { connect } from 'react-redux';
import { fetchPosts, fetchPostAndUsers } from '../actions'

import UserHeader from './UserHeader'

class PostList extends React.Component {
    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }

    componentDidMount() {
        this.props.fetchPostAndUsers();
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts, fetchPostAndUsers:fetchPostAndUsers})(PostList);