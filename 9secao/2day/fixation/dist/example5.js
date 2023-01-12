"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaAccount2 = exports.Friend = void 0;
class Friend {
    constructor() {
        this.nickname = '';
    }
    getNickname() {
        return this.nickname;
    }
    setNickname(nickname) {
        this.nickname = nickname;
    }
}
exports.Friend = Friend;
class SocialMediaAccount2 {
    constructor() {
        this.friends = new Array();
    }
    addFriend(friend) {
        this.friends.push(friend);
    }
    printFriends() {
        this.friends.map((friend) => console.log(friend));
    }
}
exports.SocialMediaAccount2 = SocialMediaAccount2;
