import { observable, action } from 'mobx';
import axios from 'axios';
import moment from 'moment'

import { apiEndpoint } from '../config'

import generateFakeData from '../utils/generate-fake-data'


export default class ReservedGuests {
  // 行
  @observable groups = []; // { id, title=予約者氏名 }
  // グループに属するもの
  @observable items = []; // { id, group=group[i].id, start=予約期間s, end=予約期間e, title=何名 }

  // 追加するためのprop
  @observable groupId = this.groups.length;
  @observable groupTitle = '';

  @observable itemId = this.items.length;
  @observable itemGroup = '';
  @observable itemStartTime = '';
  @observable itemEndTime = '';
  @observable itemTitle = '';

  @observable result = '';

  @action.bound
  handleChange = name => e => {
    this[name] = e.target.value;
  }

  // group.titleからgroup.idを取得
  getItemGroup(name) {
    let id = '';
    let newArr = this.groups.slice();
    newArr.forEach(v => { if(v.title === name) id = v.id; })
    return id;
  }

  // test
  @action.bound
  addFakeData() {
    this.groups = generateFakeData().groups;
    this.items = generateFakeData().items;
    this.groupId = this.groups.length;
    this.itemId = this.items.length;
  }

  // タイムラインに予約者を追加
  @action.bound
  addGroups() {
    let newGroups = this.groups.slice();
    let sameGroup = false;
    newGroups.forEach(v => { if(v.title === this.groupTitle) sameGroup = true; })
    // 同じ名前ならpushできない
    if(sameGroup) return;
    newGroups.push({id: this.groupId, title: this.groupTitle});
    this.groups = newGroups;
    this.groupId++;
  }

  // タイムラインの予約者を削除
  @action.bound
  deleteGroups() {
    let newGroups = this.groups.slice();
    let newItems = this.items.slice();
    newGroups.forEach((v, i) => {
      if(v.title === this.groupTitle) {
        // itemsから該当するものを削除
        newItems.forEach((w, j) => { if(v.id === w.group) newItems.splice(j, 1); })
        // groupsから該当のものを削除
        newGroups.splice(i, 1);
      }
    })
    this.groups = newGroups;
    this.items = newItems;
    this.groupTitle = '';
  }

  // タイムラインに予約を追加
  @action.bound
  addItems() {
    // mobxでobservableなarrayを扱う場合一度コピーをつくる
    let newItems = this.items.slice();
    // 氏名からgroup.idを取得し代入
    this.itemGroup = this.getItemGroup(this.groupTitle)
    // グループが存在しないならreturn
    if(this.itemGroup === '' || this.itemGroup === undefined || this.itemGroup === 'undefined') return;
    const momentStart = moment(this.itemStartTime, ["MM/DD/YYYY", "YYYY/MM/DD"]);
    const momentEnd = moment(this.itemEndTime, ["MM/DD/YYYY", "YYYY/MM/DD"]);
    // 存在する日付かどうか
    if(!momentStart.isValid() || !momentEnd.isValid()) return;
    // 差分を求めて、Endの方が小さい時return
    if(momentEnd.diff(momentStart, 'seconds') < 0) return;
    // コピーした配列へpush
    newItems.push({id: this.itemId, group: this.itemGroup, start: momentStart, end: momentEnd, title: this.itemTitle});
    // 更新
    this.items = newItems;
    this.itemId++;
    // 初期化
    this.itemGroup = '';
    this.itemStartTime = '';
    this.itemEndTime = '';
    this.itemTitle = '';
  }

  // タイムラインの予約を削除
  @action.bound
  deleteItems() {
    let newGroups = this.groups.slice();
    let newItems = this.items.slice();
    newGroups.forEach((v, i) => {
      if(v.title === this.groupTitle) {
        // itemsから該当するものを削除
        newItems.forEach((w, j) => { if(v.id === w.group) newItems.splice(j, 1); })
      }
    })
    this.items = newItems;
    this.groupTitle = '';
  }

  // groupとitemを同時に追加
  @action.bound
  addGroupsAndItems() {
    const momentStart = moment(this.itemStartTime, ["MM/DD/YYYY", "YYYY/MM/DD"]);
    const momentEnd = moment(this.itemEndTime, ["MM/DD/YYYY", "YYYY/MM/DD"]);
    // 存在する日付かどうか
    if(!momentStart.isValid() || !momentEnd.isValid()) return;
    // 差分を求めて、Endの方が小さい時return
    if(momentEnd.diff(momentStart, 'seconds') < 0) return;
    this.addGroups();
    this.addItems();

    this.groupTitle = '';
  }

  // canvasをクリックした時、そのgroupidのtitleを氏名に入力、時間を予約日、出発日に入力
  @action.bound
  inputGroupTitleAndTime(groupid, time, e) {
    let newGroups = this.groups.slice();
    newGroups.forEach(v => { if(groupid === v.id) this.groupTitle = v.title; });
    if(this.itemStartTime === '') this.itemStartTime = moment(time).format("YYYY/MM/DD");
    else if(this.itemStartTime !== '') this.itemEndTime = moment(time).format("YYYY/MM/DD");
  }

  // calendarに表示させるデータを取得
  @action.bound
  async get() {
    const path = `${apiEndpoint}/api/v1/guest/get`
    // serverと通信
    const res = await axios.get(path)
    // 結果をresへ格納
    this.result = res

    // this.groupId = res.groups.length();
    // this.itemId = res.items.length();
  }


}