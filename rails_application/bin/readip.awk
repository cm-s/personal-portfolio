BEGIN { scanningTargetInterface = 0 }
{
  if ($2 == "wlan0:") { scanningTargetInterface = 1 }
  if (scanningTargetInterface && $1 == "inet") { print $2 }
}
