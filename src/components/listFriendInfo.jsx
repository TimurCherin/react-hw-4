const ListFriendsInfo = ({ friend }) => {
    const { avatar, name } = friend;
    return (
        <li className="listFriendsWrap">
            <img className="listFriendsImage" src={avatar} alt="User avatar" />
            <p className="listFriendsText">{name}</p>
        </li>
    );
};

export default ListFriendsInfo;