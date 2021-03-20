def sort_dict(in_dict):
    return dict(sorted(in_dict.items()))


def clear_parsed_numbers(text):
    return text.replace(',', '.').replace(' ', '').replace('\xa0', '').replace('\t', '').replace('\r', '').replace('\n', '')
