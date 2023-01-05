/**Ability to create Employee Payroll Data with id, name and salary */
/**Ability to extend Employee Payroll Data to store gender and start date */
/**Ability to check the name starts with capital and has atleast 3 characters - Use Regex Pattern - Use Try Catch in case of Error */
/**Ability to check the employee id and salary are non zero positive number, the gender is M or F and date is not a future date
- Use Regex Pattern
- Use Try Catch in case of Error */
class EmployeePayrollData {
    //property
    //getter and setter method
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z][a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() { return this._department; }
    set department(department) {
        this._department = department;
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
        this._startDate = startDate;
    }
    get notes() { return this._notes; }
    set notes(notes) {
        this._notes = notes;
    }
    toString() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const employeeDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id = " + this.id + ", Name = " + this.name + ", Gender = " + this.gender + ", profilePic = " + this.profilePic + ", department = " + this.department + ", salary = " + this.salary + ", startDate = " + employeeDate + ", notes = " + this.notes;
    }
}