import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.html'
})
export class User implements OnInit {

  users: any[] = [];
  name = '';
  email = '';
  image: any;

  // ✅ EDIT MODE
  selectedUser: any = null;

  // 🔍 SEARCH
  searchText = '';

  // 📄 PAGINATION
  currentPage = 1;
  itemsPerPage = 4;

  // 🔔 TOAST MESSAGE
  message = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  // ✅ GET USERS
  getUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  // 🔍 FILTER USERS
  filteredUsers() {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 📄 PAGINATED USERS
  paginatedUsers() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers().slice(start, start + this.itemsPerPage);
  }

  // 📄 NEXT PAGE
  nextPage() {
    if ((this.currentPage * this.itemsPerPage) < this.filteredUsers().length) {
      this.currentPage++;
    }
  }

  // 📄 PREVIOUS PAGE
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // ✅ FILE CHANGE
  onFileChange(event: any) {
    this.image = event.target.files[0];
  }

  // ✅ ADD OR UPDATE USER
  addUser() {
    console.log("BUTTON CLICKED");

    let formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);

    if (this.image) {
      formData.append('image', this.image);
    }

    // 🔥 EDIT or ADD
    if (this.selectedUser) {
      this.updateUser(formData);
    } else {
      this.userService.addUser(formData).subscribe(() => {
        this.getUsers();
        this.resetForm();

        // 🔔 TOAST
        this.showMessage('User added successfully!');
      });
    }
  }

  // ✅ EDIT CLICK
  editUser(user: any) {
    this.selectedUser = user;
    this.name = user.name;
    this.email = user.email;
  }

  // ✅ UPDATE USER
  updateUser(formData: FormData) {
    this.userService.updateUser(this.selectedUser.id, formData)
      .subscribe(() => {
        this.getUsers();
        this.resetForm();
        this.selectedUser = null;

        // 🔔 TOAST
        setTimeout(() => {
  this.showMessage('User updated successfully!');
}, 100);

      });
  }

  // ✅ DELETE USER
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();

      // 🔔 TOAST
      setTimeout(() => {
  this.showMessage('User deleted successfully!');
}, 100);

    });
  }

  // 🔔 SHOW MESSAGE FUNCTION
  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }

  // ✅ RESET FORM
  resetForm() {
    this.name = '';
    this.email = '';
    this.image = null;
  }
}
