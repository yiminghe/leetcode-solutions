class Solution {
  public String longestDupSubstring(String s) {
    int l = s.length();
    int[] lastDp = new int[l + 1];
    int[] tmp;
    int[] dp = new int[l + 1];

    for (int i = 0; i <= l; i++) {
      lastDp[i] = 0;
      dp[i] = 0;
    }

    int maxStart = -1;
    int max = 0;
    for (int start = 1; start <= l; start++) {
      for (int end = start + 1; end <= l; end++) {
        if (s.charAt(end - 1) == s.charAt(start - 1)) {
          dp[end] = lastDp[end - 1] + 1;
          if (dp[end] > max) {
            max = dp[end];
            maxStart = start;
          }
        } else {
          dp[end] = 0;
        }
      }
      tmp = dp;
      dp = lastDp;
      lastDp = tmp;
    }
    return max>0 ? s.substring(maxStart - max, maxStart) : "";
  }

  public static void main(String[] args) {
    Solution s = new Solution();
    System.out.println(s.longestDupSubstring("abcab"));
  }
}