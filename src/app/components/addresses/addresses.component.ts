import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html'
})
export class AddressesComponent implements OnInit {
  addresses: any[] = [];
  address = {
    address_line: '',
    city: '',
    state: '',
    zip_code: '',
    country: ''
  };

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.loadAddresses();
  }

  loadAddresses() {
    this.addressService.getAddresses().subscribe((res: any) => {
      this.addresses = res.addresses;
    });
  }

  addAddress() {
    this.addressService.addAddress(this.address).subscribe(() => {
      this.address = { address_line: '', city: '', state: '', zip_code: '', country: '' };
      this.loadAddresses();
    });
  }

  deleteAddress(id: number) {
    this.addressService.deleteAddress(id).subscribe(() => {
      this.loadAddresses();
    });
  }
}
