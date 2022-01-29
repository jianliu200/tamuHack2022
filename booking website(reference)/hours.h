#ifndef HOURS_H
#define HOURS_H

#include <iostream>
#include <vector>

using std::string;
using std::vector;

class hours{
    private:
        vector<string> myHours;
    public:
        hours();
        ~hours();
        void addHours(string time);
        void removeHours(string time);
        vector<string> getHours();
        void displayHours();
};

#endif