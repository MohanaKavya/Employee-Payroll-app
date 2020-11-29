class EmployeePayroll {

    constructor() {

    }
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if (nameRegex.test(name)) this._name = name;
        else throw "Name is incorrect";    }
    get gender() {
        return this._gender;
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        let now = new Date();
        if (startDate > now) throw 'Start Date is in future Date!';
        var diff = Math.abs(now.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30) throw 'Start Date is beyond 30 days!';
        this._startDate = startDate;    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get notes() {
        return this._notes;
    }
    set notes(notes) {
        this._notes = notes;
    }
    toString() {
        const format = { year: "numeric", month: "long", day: "numeric" };
        const date = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-IN", format);
        return "id = " + this.id + ", name = " + this.name + ", profile Pic = " + this.profilePic + ", salary = " + this.salary + ", gender = " + this.gender + ", start date = " + date + ", department = " + this.department + ", notes = " + this.notes;
    }
} 