#ifndef _request_h
#define _request_h

#include <iostream>
#include <vector>

using std::string;
using std::vector;

class request{
    private:
        string date;
        string time;
        string type;
        string amount;
        string name;
        string email;
        string phone;
        vector<string> array;
    public:
        request(string date, string time, string type, string amount, string name, string email, string phone);
        ~request();
        vector<string> getArray();
};

#endif