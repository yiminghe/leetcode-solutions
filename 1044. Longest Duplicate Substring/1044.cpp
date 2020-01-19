class RollingHash {
    unsigned long p = 31;
    unsigned long m = 1L << 32;
    string s;
    vector<unsigned long> hashMap;
    vector<unsigned long> pPower;
    
    void computePPower() {
        pPower.resize(s.size(), 1);
        for (int i = 1; i < s.size(); ++i) {
            pPower[i] = (pPower[i-1] * p) % m;
        }    
    }
    
    void fillHashMap() {
        hashMap.resize(s.size()+1);
        unsigned long curr = 0;
        for (int i = 1; i < hashMap.size(); ++i) {
            curr = (curr*p + s[i-1]) % m;
            hashMap[i] = curr;
        }
    }
    
public:
    RollingHash(string input) {
        s = input; 
        computePPower();
        fillHashMap();  
    }
    
    unsigned long getHashCode(int i, int j) {
        if (i == 0) return hashMap[j];
        // Take consideration of module m.
        // Instead of return (hashMap[j] - hashMap[i]*pPower[j-i]), do the following:
        return (hashMap[j] + m - (hashMap[i]*pPower[j-i])%m) % m;
    }
};

class Solution {  
    // Find if there is duplicate substring of length k
    // return start position if possible, else -1
    int dupSubstrK(RollingHash &rs, string &s, int k) {
        // key is rolling hash value of s[i..i+k]
        // value is start idxes i of all substr s[i..i+k] that associated with the key 
        unordered_multimap<unsigned long, int> mp;
        for (int i = 0; i + k <= s.size(); ++i) {
            unsigned long key = rs.getHashCode(i, i+k);
            auto range = mp.equal_range(key);
            for (auto it = range.first; it != range.second; ++it) {
                if (s.substr(it->second, k) == s.substr(i, k)) {
                        return i;
                    }
            }
            mp.insert(pair<unsigned long, int>(key, i));
        }
        return -1;
    }
        
public:
    string longestDupSubstring(string S) {
        RollingHash rs(S);
        int start = 0, len = 0;
        int left = 0, right = S.size();
        while (left + 1 < right) {
            int mid = left + (right - left) / 2;
            int tmp = dupSubstrK(rs, S, mid);
            if (tmp != -1) {
                left = mid;
                start = tmp;
                len = left;                
            } else {
                right = mid;
            }
        }
        return S.substr(start, len);
    }
};

int main(int argc, char **argv)
{
}