"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaAccount = exports.Profile = void 0;
class Profile {
    constructor() {
        this.name = '';
        this.email = '';
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `name - [${this.name}] - email - [${this.email}]`;
    }
}
exports.Profile = Profile;
class SocialMediaAccount {
    constructor() {
        // Cria nossa composição com o perfil
        this.profile = new Profile();
    }
    editProfile(name, email) {
        this.profile.setName(name);
        this.profile.setEmail(email);
    }
    printProfile() {
        console.log(this.profile.toString());
    }
}
exports.SocialMediaAccount = SocialMediaAccount;
