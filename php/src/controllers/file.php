<?php

function getFileType($filename)
{
    $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
    if ($ext === 'pdf') return 'pdf';
    if (in_array($ext, array('doc', 'docx', 'rtf'))) return 'word';
    if (in_array($ext, array('zip', 'djvu'))) return 'zip';
    return 'other';
}