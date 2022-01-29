#include <iostream>
#include <vector>

#include "request.h"

request::request(string date, string time, string type, string amount, string name, string email, string phone){
    this->date = date;
    array.push_back(date);
    this->time = time;
    array.push_back(time);
    this->type = type;
    array.push_back(type);
    this->amount = amount;
    array.push_back(amount);
    this->name = name;
    array.push_back(name);
    this->email = email;
    array.push_back(email);
    this-> phone = phone;
    array.push_back(phone);
}

request::~request(){
    for(int i = 0; i < array.size(); i++){
        array.erase(array.begin());
    }
}
vector<string> request::getArray(){
    return array;
}




