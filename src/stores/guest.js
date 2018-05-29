import { observable, action } from 'mobx';
import axios from 'axios';

import { apiEndpoint } from '../config'

export default class Guest {
  @observable name = ''; // 宿泊者氏名
  @observable sex = ''; // 性別
  @observable age = ''; // 年齢
  @observable address = ''; // 住所
  @observable comingFrom = ''; // 前泊地
  @observable nationality = ''; // 国籍
  @observable passportNumber = ''; // 旅券番号

  @observable showResult = false;
  @observable result = '';

  @action.bound
  handleChange = name => e => {
    this[name] = e.target.value;
  }

  @action.bound
  async submit() {
    const path = `${apiEndpoint}/api/v1/guest/add`
    const params = {
      name: this.name, sex: this.sex, age: this.age, address: this.address, comingFrom: this.comingFrom,
      nationality: this.nationality, passportNumber: this.passportNumber,
    }
    // serverと通信
    // const res = await axios.get(path)
    const res = await axios.post(path, params)
    // 結果をresへ格納
    this.result = res
  }


}