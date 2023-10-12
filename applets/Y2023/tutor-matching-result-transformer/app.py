"""
To transform format of tutor matching result

@author: Glen
@email: glen.zhang7@gmail.com
@date: 2023.10.12
@label: tutor_matching
"""

from pathlib import Path
import numpy as np
import pandas as pd

# ======================================
#             Set up
# ======================================
# configure data path
data_path = Path(
    "C:/Earth/data/causalapp/applets/Y2023/tutor-matching-result-transformer")

# ======================================
#             Import data
# ======================================
trade_student_dataframe = pd.read_excel(data_path.joinpath("分配版-2021级经济学系学生信息表.xls"),
                                        sheet_name="国贸")
econ_student_dataframe = pd.read_excel(data_path.joinpath("分配版-2021级经济学系学生信息表.xls"),
                                       sheet_name="经济")
trade_matching_result = pd.read_excel(
    data_path.joinpath("2021级国贸专业-最后匹配结果.xlsx"))
econ_matching_result = pd.read_excel(
    data_path.joinpath("2021级经济学专业-最后匹配结果.xlsx"))

print(trade_student_dataframe)
print(trade_matching_result)

# ======================================
#             Define function
# ======================================


def to_student_teacher_dict(data):
    """
    to create and return student:teacher dictionary

    Parameters
    ----------
    data : pd.DataFrame
        tutor matching result data

    Returns
    -------
    student_teacher_dict : dict
        student:teacher dictionary
    """
    student_teacher_dict = dict()
    for item in data.itertuples():
        item_dict = item._asdict()
        teacher = item_dict["教师"]
        for label in ["学生", "_3", "_4", "_5"]:
            if pd.isnull(item_dict[label]):
                continue
            student_teacher_dict[item_dict[label]] = teacher

    return student_teacher_dict


def transform(student_dataframe, matching_result):
    """
    to transform data to wanted format

    Parameters
    ----------
    student_dataframe : pd.DataFrame
        student infomation data frame

    matching_result : pd.DataFrame
        tutor matching result data frame

    Returns
    -------
    student matching result(new format) : pd.DataFrame
    """
    student_list = []
    student_teacher_dict = to_student_teacher_dict(matching_result)
    for row in student_dataframe.itertuples():
        row_dict = row._asdict()
        row_data = [row_dict[unit] for unit in ["学号", "姓名", "班级"]]
        row_data.append(student_teacher_dict[row_dict["姓名"]])
        student_list.append(row_data)
    return pd.DataFrame(student_list, columns=["学号", "姓名", "班级", "匹配教师"])


# ======================================
#             Transform
# ======================================
econ_matching_result_new_format = transform(
    econ_student_dataframe, econ_matching_result)
trade_matching_result_new_format = transform(
    trade_student_dataframe, trade_matching_result)

# output
econ_matching_result_new_format.to_excel(
    data_path.joinpath("经济师生匹配结果.xlsx"), index=False)
trade_matching_result_new_format.to_excel(
    data_path.joinpath("国贸师生匹配结果.xlsx"), index=False)
