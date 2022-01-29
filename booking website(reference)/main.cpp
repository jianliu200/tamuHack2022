#include <iostream>
#include "dataBase.h"
#include "request.h"
#include "times.h"
#include<sstream>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::ifstream;
using std::istringstream;

int main(){
    
    //test that constructor works
    /*
    string date = "01/01/2021";
    string type = "bonfire";
    string amount = "30";
    string name =  "ibrahim";
    string email = "ibrahimsemary@tamu.edu";
    string phone = "713-494-6729";

    request temp = request("01/01/2021","bonfire","30", "ibrahim", "ibrahimsemary@tamu.edu", "713-494-6729");
    vector<string> array = temp.getArray();
    */
    /*
    for(int i = 0 ; i < array.size(); i++){
        cout << array[i] << ", ";
    }
    cout << endl;
    */
    // prints(01/01/2021, bonfire, 30, ibrahim, ibrahimsemary@tamu.edu, 713-494-6729)
    //works


    //test database
    /*
    request temp2 = request("2/3/2022", "campus", "30", "farha", "farhasemary@tamu.edu", "1623y172y3");

    dataBase x = dataBase();
    x.addRequest(date,type,amount,name,email,phone);
    vector<request*> y = x.getRequests();
    vector<string> z = y[0]->getArray();
    for(int i = 0; i < z.size(); i++){
        cout << z[i] << ", ";
    }
    cout << endl;

    */
    //works
    /*
    //*********TIMES
    //test times constructor works
    times temp = times();
    //test addTime() works
    temp.addTime("01/02/2021");
    temp.addTime("12/27/2021");
    string temp2 = temp.getTimes()[0];
    cout << temp2 << endl;
    //remove time
    temp.removeTime("01/02/2021");
    cout << temp.getTimes()[0] << endl;
    //works
    */

    /*
   //test times
   hours* monday = new hours();
   monday->addHours("1:00pm");
   monday->addHours("2:00pm");
   monday->addHours("3:00pm");

    vector<string> mon_hours = monday->getHours();
    for(int i = 0; i < mon_hours.size(); i++){
        cout << mon_hours[i] << endl;
    }
    */

   
   //*****putting it all together
    dataBase data = dataBase();
    string temp;
    string type;
    cout << "Select which tour you want to book: "<< endl << "1. Campus" << endl << "2. MSC" << endl << "3. Bonfire" << endl;
    getline(cin,temp);

    if(temp == "1"){
        type = "Campus";
    }
    else if(temp == "2"){
        type = "MSC";
    }
    else if(temp == "3"){
        type = "Bonfire";
    }
    else{
        cout << "invalid" << endl;
    }
    cout << type << " picked!" << endl << endl << endl;
    times list_of_times = times();
    list_of_times.addTime("12/27/2021");
    list_of_times.addTime("12/28/2021");
    list_of_times.addTime("12/29/2021");
    cout << "pick a date: " << endl;
    list_of_times.displayTimes();
    getline(cin,temp);
    int temp2 = stoi(temp);
    string date = list_of_times.getTimes()[temp2-1];
    cout << "picked date: " << date << endl << endl << endl;

    hours* monday = new hours();
    monday->addHours("1:00pm");
    monday->addHours("2:00pm");
    monday->addHours("3:00pm");

    cout << " pick a time: " << endl;
    monday->displayHours();
    getline(cin,temp);
    temp2 = stoi(temp);
    string time = monday->getHours()[temp2-1];
    cout << "picked time: " << time << endl << endl << endl;


    
    string amount;
    string name;
    string email;
    string phone;

    cout << "how many people are coming: ";
    getline(cin, amount);

    cout << "Name: ";
    getline(cin, name);
    

    cout << "Email: ";
    getline(cin, email);

    cout << "phone number: ";
    cin >> phone;
    cout << endl;

    data.addRequest(date, time, type, amount, name, email, phone);
    
    vector<request*> my_requests = data.getRequests();
    vector<string> my_req = my_requests[0]->getArray();

    cout << "you're tour has been booked for: "<< endl;

    for(int i = 0; i < my_req.size(); i++){
        cout << my_req[i] << ", "; 
    }
    cout << endl;
    


    return 0;
    
}