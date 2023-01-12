"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailList = exports.Email = void 0;
class Email {
    constructor(from, to, subject, message) {
        this._from = from;
        this._to = to;
        this._message = message;
        this._subject = subject;
    }
    set subject(newSubject) {
        if (newSubject.length <= 40)
            this._subject = newSubject;
    }
    get subject() {
        return this._subject;
    }
    get from() { return this._from; }
    get to() { return this._to; }
    get content() {
        return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
    }
}
exports.Email = Email;
class MailList {
    // Essa sintaxe no construtor é chamada `Parameter Properties`
    // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
    constructor(mailList = []) {
        this.mailList = mailList;
    }
    get all() { return this.mailList; }
    getEmailsSentBy(mailAddress) {
        return this.mailList.filter((mail) => mail.from === mailAddress);
    }
    getByEmailFrom(mailAddress) {
        return this.mailList.filter((mail) => mail.from === mailAddress);
    }
    getEmailsTo(mailAddress) {
        return this.mailList.filter((mail) => mail.to === mailAddress);
    }
    getEmailsBySubject(searchString) {
        return this.mailList
            .filter((mail) => mail.subject.indexOf(searchString) !== -1);
    }
    addEmail(newMail) { this.mailList.push(newMail); }
    removeEmail(mailToRemove) {
        // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma
        this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
    }
}
exports.MailList = MailList;
